# Webrise - Guida al Deployment

## 📦 Contenuto del Progetto

Questo archivio contiene il sito web completo di **Webrise**, un'agenzia di web design moderna e minimalista.

### Caratteristiche Principali
- Design minimalista con colore primario verde #4CAF50
- Pagina Demo con finestre macOS interattive
- Modulo di consulenza integrato con Supabase
- Backend server-side con Supabase Edge Functions

## 🚀 Installazione

### Prerequisiti
- Node.js 18+ 
- pnpm (gestore pacchetti)
- Account Supabase

### Step 1: Estrazione e Installazione Dipendenze

```bash
# Estrai l'archivio
tar -xzf webrise-project.tar.gz
cd webrise-project

# Installa le dipendenze
pnpm install
```

### Step 2: Configurazione Supabase

1. **Crea un progetto Supabase** su [supabase.com](https://supabase.com)

2. **Configura le credenziali** in `/src/utils/supabase/info.ts`:
```typescript
export const projectId = 'il-tuo-project-id';
export const publicAnonKey = 'la-tua-anon-key';
```

3. **Crea la tabella `richieste`** nel database Supabase:
```sql
CREATE TABLE richieste (
  id BIGSERIAL PRIMARY KEY,
  "nome e cognome" TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  nome_attività TEXT,
  descrizione TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

4. **Configura i secrets di Supabase** per le Edge Functions:
```bash
# Imposta SUPABASE_SERVICE_ROLE_KEY
# (Ottieni la chiave da: Dashboard Supabase > Project Settings > API > service_role key)
```

### Step 3: Deploy delle Edge Functions

```bash
# Installa Supabase CLI (se non già installato)
npm install -g supabase

# Login a Supabase
supabase login

# Link al progetto
supabase link --project-ref il-tuo-project-id

# Deploy delle functions
supabase functions deploy server
```

### Step 4: Avvio Locale (Sviluppo)

```bash
# Avvia il server di sviluppo
pnpm dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 🌐 Deployment in Produzione

### Opzione 1: Vercel (Raccomandato)

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opzione 2: Netlify

```bash
# Build del progetto
pnpm build

# Deploy la cartella dist/
```

### Opzione 3: Hosting Tradizionale

```bash
# Build del progetto
pnpm build

# Carica il contenuto della cartella dist/ sul tuo server
```

## ⚙️ Variabili d'Ambiente per Produzione

Assicurati di configurare queste variabili nel tuo servizio di hosting:

- `SUPABASE_URL`: URL del progetto Supabase
- `SUPABASE_ANON_KEY`: Chiave pubblica anonima
- `SUPABASE_SERVICE_ROLE_KEY`: Chiave service role (solo per Edge Functions)

## 📁 Struttura del Progetto

```
webrise-project/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Componente principale
│   │   └── components/             # Componenti React
│   │       ├── Consultation.tsx    # Modulo consulenza
│   │       ├── DemoSection.tsx     # Sezione demo
│   │       └── ...
│   ├── styles/
│   │   ├── theme.css              # Tema e variabili CSS
│   │   └── fonts.css              # Importazioni font
│   └── utils/
│       └── supabase/
│           └── info.ts            # Configurazione Supabase
├── supabase/
│   └── functions/
│       └── server/                # Edge Functions
│           ├── index.tsx          # Server Hono
│           └── kv_store.tsx       # Utility KV store
└── package.json

```

## 🔧 Risoluzione Problemi

### Il modulo di consulenza non funziona
- Verifica che la tabella `richieste` sia stata creata
- Controlla che `SUPABASE_SERVICE_ROLE_KEY` sia configurato
- Verifica che le Edge Functions siano state deployate

### Errori CORS
- Assicurati che il server Hono abbia CORS aperto
- Verifica l'URL delle Edge Functions in `Consultation.tsx`

### Errori di build
- Elimina `node_modules` e `pnpm-lock.yaml`
- Esegui `pnpm install` di nuovo

## 📞 Supporto

Per domande o problemi, consulta la documentazione:
- [Supabase Docs](https://supabase.com/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licenza

Questo progetto è proprietà di Webrise.

---

**Buon lavoro! 🚀**
