# Government Form Automation

**Purpose**: Automate filling forms on Spanish government portals  
**Last Updated**: March 26, 2026

---

## 🎯 Current Status

| Portal | URL | Status | Automation |
|--------|-----|--------|------------|
| idCAT (Catalan ID) | ciutada.idcat.aoc.cat | ✅ Ready | Playwright script |
| Modelo 036 (Tax) | sede.agenciatributaria.gob.es | ⏳ Pending | Not started |
| RETA (Social Security) | importass.seg-social.es | ⏳ Pending | Not started |

---

## 📁 Automation Files

| File | Purpose |
|------|---------|
| `automation.py` | Main Playwright script for idCAT forms |
| `form_automation.py` | Alternative form automation |
| `playwright_form_filler.py` | Another variant |
| `simple_automation.py` | Simplified version |
| `ALL_REQUIRED_DATA_SUMMARY.csv` | Form field data mapping |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install playwright
playwright install chromium
```

### 2. Prepare Data
Edit `ALL_REQUIRED_DATA_SUMMARY.csv`:
- Ensure all required fields have values in `EXTRACTED_VALUE` column
- Check `fechaInicio` matches your planned business start date

### 3. Run Automation
```bash
# Visible mode (recommended for first run)
python automation.py

# Headless mode
python automation.py --headless
```

---

## 📋 Form Fields (from CSV)

### Required Fields (69 total)
- **Identity**: fullName, nie, email, phone, birthDate, nationality
- **Address**: street, number, city, postalCode, province
- **Business**: activityDescription, iaePrimary, cnae, startDate, workPlace
- **Tax**: ivaRegime, irpfRegime, taxResident
- **Banking**: iban
- **Social Security**: regimeType, tarifaReducida, contributionBase

### Critical Constraints
1. `fechaInicio` must match EXACTLY across ALL forms (DD/MM/YYYY)
2. Italian nationality → NIE + passport required
3. Spanish IBAN preferred (`ES` prefix)
4. Tarifa reducida = €80/month for first 12-18 months

---

## ⚠️ Important Notes

### Authentication
- idCAT form: **Publicly accessible** (no auth required)
- Modelo 036: Will need Cl@ve or certificate
- RETA: Will need Cl@ve or certificate

### Cl@ve QR (NOT Automatable)
The Cl@ve QR system requires:
- Manual phone scan
- Physical device unlock
- 5-minute approval window

**Alternative**: Use Cl@ve PIN (SMS) or digital certificate

### Anti-Bot Measures
The automation includes:
- `--disable-blink-features=AutomationControlled`
- Human-like delays (200-1200ms)
- Stealth mode enabled

---

## 📤 Output Structure

```
output/
├── screenshots/          # Auto-captured for debugging
│   ├── 01_initial.png
│   ├── fill_005.png
│   └── 99_final.png
├── logs/
│   └── automation.log    # Detailed execution log
├── pdfs/                # Downloaded receipts
└── state/
    └── automation-state.json  # Progress persistence
```

---

## 🔧 Troubleshooting

### No fields detected
- Check if form is in iframe (requires frame switching)
- Form may be behind authentication
- Update keywords in `FieldDetector._match_field()`

### Anti-bot detection
- Run in visible mode first
- Add longer delays between actions
- Consider residential proxies

### PDF download fails
- Use `curl` fallback for large files (>4MB)

---

## 📚 Full Documentation

See `README_AUTOMATION.md` for detailed documentation.

---

## 🎯 Next Steps After Form Submission

1. Save Modelo 036 receipt to `personal/`
2. Complete RETA separately
3. Apply for grants (Kit Digital, Activa/Fomento)
4. Set calendar reminders for quarterly taxes (Form 303/130)

---

*This automation is for educational purposes. Always comply with government portal terms of service.*
