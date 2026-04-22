import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-f1bdd54d/health", (c) => {
  return c.json({ status: "ok" });
});

// Endpoint per ottenere la struttura della tabella richieste
app.get("/make-server-f1bdd54d/richieste/schema", async (c) => {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Query per ottenere le colonne della tabella richieste
    const { data, error } = await supabase
      .from('richieste')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error fetching schema:', error);
      return c.json({ success: false, error: error.message }, 500);
    }

    // Ottieni i nomi delle colonne
    const columns = data && data.length > 0 ? Object.keys(data[0]) : [];
    
    return c.json({ success: true, columns, sample: data[0] || null });
  } catch (error) {
    console.error('Error fetching schema:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Endpoint per salvare le richieste di consulenza
app.post("/make-server-f1bdd54d/richieste", async (c) => {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const body = await c.req.json();
    console.log('Received consultation request:', body);

    // Inserisci i dati nella tabella 'richieste'
    const { data, error } = await supabase
      .from('richieste')
      .insert([body])
      .select();

    if (error) {
      console.error('Error inserting consultation request:', error);
      return c.json({ 
        success: false, 
        error: `Database error while saving consultation request: ${error.message}` 
      }, 500);
    }

    console.log('Consultation request saved successfully:', data);
    return c.json({ success: true, data });
    
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return c.json({ 
      success: false, 
      error: `Error processing consultation request: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);