# Code Execution Runtime (Piston)

Same Piston stack runs locally and in production.

---

## Local dev (Apple Silicon Mac)

```bash
npm run judge0:local                    # start container
bash infra/judge0/install-runtimes.sh  # one-time, ~2 min
```

`.env.local`:
```
JUDGE0_BASE_URL=http://localhost:2000
JUDGE0_AUTH_TOKEN=                      # leave blank locally
```

Runtimes persist in the `judge0_piston-data` Docker volume across restarts.

---

## Production (Fly.io)

### 1. Install Fly CLI and log in

```bash
brew install flyctl
fly auth login
```

### 2. Create the app (first time only)

```bash
cd infra/judge0
fly apps create dsafun-piston
fly volumes create piston_data --region bom --size 5
```

### 3. Set the API key secret

```bash
fly secrets set PISTON_API_KEY="$(openssl rand -hex 32)" --app dsafun-piston
```

Copy the value — you'll need it for Vercel.

### 4. Deploy

```bash
fly deploy --config infra/judge0/fly.toml
```

### 5. Install runtimes (once after first deploy)

```bash
bash infra/judge0/install-runtimes.sh https://dsafun-piston.fly.dev <your-api-key>
```

Runtimes live in the persistent volume — survives redeploys.

### 6. Set Vercel environment variables

```
JUDGE0_BASE_URL=https://dsafun-piston.fly.dev
JUDGE0_AUTH_TOKEN=<the same api key>
```

### Verify

```bash
curl -X POST https://dsafun-piston.fly.dev/api/v2/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: Token <api-key>" \
  -d '{"language":"python","version":"3.10.0","files":[{"content":"print(42)"}]}'
# expect: {"run":{"stdout":"42\n","code":0,...}}
```

---

## Oracle Cloud VPS (alternative — waiting for capacity)

When Oracle Cloud Free Tier ARM capacity is available, the retry script is in your Claude memory (`project_deployment.md`). Once the VM is up:

1. SSH in and install Docker
2. `scp -r infra/judge0/ ubuntu@<ip>:~/piston/`
3. Set `PISTON_API_KEY` in `docker-compose.yml`
4. `docker compose up -d && bash install-runtimes.sh`
5. Expose via Cloudflare Tunnel → set `JUDGE0_BASE_URL` in Vercel
