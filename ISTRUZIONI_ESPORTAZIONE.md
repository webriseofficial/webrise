# 📦 Esportazione Progetto Webrise

## ✅ Archivio Creato

Il progetto è stato esportato con successo in:

**`webrise-project-complete.tar.gz`** (101 KB)

## 📋 Cosa Include l'Archivio

L'archivio contiene:
- ✅ Tutto il codice sorgente (`/src`)
- ✅ Componenti React (Header, Footer, Consultation, DemoSection, ecc.)
- ✅ Configurazione Supabase Edge Functions (`/supabase/functions`)
- ✅ Configurazione Tailwind CSS e temi
- ✅ File di configurazione (package.json, vite.config.ts, postcss.config.mjs)
- ✅ Guida completa al deployment (DEPLOYMENT_GUIDE.md)

**Nota:** `node_modules` è escluso (verrà ricreato con `pnpm install`)

## 🚀 Prossimi Passi

### 1️⃣ Scarica l'Archivio

L'archivio si trova in: `/workspaces/default/code/webrise-project-complete.tar.gz`

### 2️⃣ Estrai il Progetto

```bash
# Su Linux/Mac
tar -xzf webrise-project-complete.tar.gz -C webrise-project
cd webrise-project

# Su Windows (usa 7-Zip o WinRAR)
```

### 3️⃣ Installa le Dipendenze

```bash
pnpm install
```

### 4️⃣ Configura Supabase

**IMPORTANTE:** Prima di avviare il progetto, devi:

1. **Creare un progetto Supabase** (se non l'hai già fatto)
2. **Configurare le credenziali** in `/src/utils/supabase/info.ts`
3. **Creare la tabella `richieste`** nel database
4. **Deployare le Edge Functions**

📖 **Leggi DEPLOYMENT_GUIDE.md per istruzioni dettagliate**

### 5️⃣ Avvia il Progetto

```bash
# Sviluppo locale
pnpm dev

# Build per produzione
pnpm build
```

## 🔑 Configurazione Richiesta

### File: `/src/utils/supabase/info.ts`

```typescript
export const projectId = 'IL_TUO_PROJECT_ID';  // ⚠️ DA MODIFICARE
export const publicAnonKey = 'LA_TUA_ANON_KEY'; // ⚠️ DA MODIFICARE
```

### Tabella Database: `richieste`

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

### Secrets Supabase (per Edge Functions)

Devi configurare questi secrets nel tuo progetto Supabase:

```bash
SUPABASE_URL=https://IL_TUO_PROJECT_ID.supabase.co
SUPABASE_ANON_KEY=la_tua_anon_key
SUPABASE_SERVICE_ROLE_KEY=la_tua_service_role_key
SUPABASE_DB_URL=postgresql://...
```

## 📂 Struttura Componenti Principali

```
App.tsx (Principale)
├── Header.tsx (Navigazione)
├── Hero Section (con RotatingWebsite3D)
├── Services Section
├── About Section
├── Portfolio Section
├── Consultation.tsx (Modulo con integrazione Supabase)
├── DemoSection.tsx (Finestre macOS interattive)
└── Footer.tsx
```

## 🎨 Design

- **Colore primario:** Verde #4CAF50
- **Stile:** Moderno e minimalista
- **Framework:** React + Tailwind CSS
- **Animazioni:** Framer Motion
- **Backend:** Supabase (Database + Edge Functions)

## ⚠️ Note Importanti

1. **RLS (Row Level Security)**: Il modulo di consulenza usa l'architettura server-side con `SUPABASE_SERVICE_ROLE_KEY` per bypassare le politiche RLS

2. **Edge Functions**: Il server Hono è configurato in `/supabase/functions/server/index.tsx`

3. **Endpoint API**: Tutte le route sono prefissate con `/make-server-f1bdd54d/`

4. **CORS**: Il server è configurato con CORS aperto per accettare richieste dal frontend

## 🆘 Problemi Comuni

### "Cannot find module 'supabase'"
→ Esegui `pnpm install`

### "RLS policy violation" nel modulo consulenza
→ Verifica che le Edge Functions siano deployate e che `SUPABASE_SERVICE_ROLE_KEY` sia configurato

### Il modulo non salva i dati
→ Controlla che la tabella `richieste` sia stata creata correttamente

## 📞 Supporto

Per qualsiasi problema durante l'installazione o il deployment, consulta:
- **DEPLOYMENT_GUIDE.md** - Guida completa al deployment
- **Documentazione Supabase** - https://supabase.com/docs
- **Documentazione React** - https://react.dev

---

✨ **Il tuo progetto Webrise è pronto per essere deployato!**
