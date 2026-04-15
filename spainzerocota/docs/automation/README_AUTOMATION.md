# Catalan ID Portal Form Automation

Production-ready Playwright automation for filling forms on `ciutada.idcat.aoc.cat` using data from `ALL_REQUIRED_DATA_SUMMARY.csv`.

## Features

- **Intelligent Field Detection**: Multiple strategies (labels, placeholders, attributes, ARIA)
- **Stealth Mode**: Anti-bot evasion with human-like behavior
- **Robust Error Handling**: Retry logic, state persistence, comprehensive logging
- **Spanish Format Support**: DD/MM/YYYY dates, NIE, IBAN, phone formats
- **Priority Filling**: Logical order (Personal → Address → Business → Tax)
- **Screenshot Evidence**: Auto-captures for debugging
- **State Persistence**: Resume interrupted automation

## Prerequisites

```bash
# Install Playwright
pip install playwright

# Install browsers
playwright install chromium

# Verify installation
playwright --version
```

## Setup

1. **Ensure CSV data is populated**: Edit `ALL_REQUIRED_DATA_SUMMARY.csv` with actual values in the `EXTRACTED_VALUE` column.

2. **Review required fields**:
   - Personal: fullName, nie, email, phone, birthDate, nationality
   - Address: street, number, city, postalCode, province
   - Business: activityDescription, iaePrimary, cnae, startDate, workPlace
   - Tax: ivaRegime, irpfRegime, taxResident
   - Banking: iban
   - Social Security: regimeType, tarifaReducida, contributionBase

3. **Critical date**: `fechaInicio` (business start date) must match across all forms exactly (DD/MM/YYYY).

## Usage

```bash
# Run in visible mode (recommended first run)
python automation.py

# Run headless
python automation.py --headless
```

**Note**: The form URL (`https://ciutada.idcat.aoc.cat/es/solicitar/form`) appears to be accessible without authentication based on current research. If a login wall appears, you may need to:
1. Obtain idCAT certificate (idCAT Mòvil is fastest)
2. Use Cl@ve authentication (requires manual QR scan + phone approval)
3. Handle authentication manually before running automation

## Output Structure

```
output/
├── screenshots/          # Auto-captured images
│   ├── 01_initial.png
│   ├── fill_005.png
│   ├── fill_010.png
│   └── 99_final.png
├── logs/
│   └── automation.log   # Detailed execution log
├── pdfs/                # Downloaded receipts (if any)
└── state/
    └── automation-state.json  # Progress persistence
```

## Form Field Detection

The script uses multiple strategies to map CSV fields to HTML inputs:

1. **Label matching**: `<label for="field">Nombre</label>` → `fullName`
2. **Placeholder text**: `<input placeholder="Nombre completo">`
3. **Name/ID attributes**: `name="nie"`, `id="email"`
4. **ARIA labels**: `aria-label="Fecha de nacimiento"`
5. **Spanish keyword mapping**: "calle" → `street`, "iban" → `iban`

If fields are not detected, you may need to:
- Inspect the live form structure
- Add custom mappings in `FieldDetector._match_field()`
- Update the keyword dictionary with Spanish terms found on the form

## Important Constraints

From the CSV analysis:

1. **fechaInicio linkage**: Business start date must be identical across Modelo 036, RETA, and all related submissions.
2. **Empadronamiento timing**: Certificate must be <3 months old at application date.
3. **Nationality conditionals**:
   - Spanish citizens: Need DNI copy (not passport)
   - Foreign citizens (Italian): Need NIE + passport copy
4. **IBAN format**: EU IBANs accepted, but Spanish format preferred (`ES` prefix).
5. **Tarifa reducuda**: RETA checkbox for €80/month (first 12-18 months).

## Troubleshooting

### No fields detected
- Check if form is inside iframe (requires frame switching)
- Form may be behind authentication
- Update field detection keywords based on actual HTML

### Playwright not found
```bash
pip install --upgrade playwright
playwright install chromium
```

### Element not found / timeout
- Increase timeout values in code
- Add explicit waits for form to load
- Check for iframes or shadow DOM
- Verify form URL is correct and accessible

### Authentication required
The `/es/solicitar/form` endpoint is expected to be publicly accessible. If not:
1. Manually authenticate first
2. Save browser context state
3. Load saved state in automation

### Anti-bot detection
- Run in non-headless mode first to verify
- Use `--disable-blink-features=AutomationControlled` flag
- Add human-like delays between actions
- Consider using residential proxies for heavy automation

## Security Notes

- ⚠️ Never commit real personal data to version control
- ⚠️ Use `.env` files for sensitive values
- ⚠️ The script logs to file - protect log files
- ⚠️ Form submissions are real government transactions

## Research-Based Recommendations

Based on analysis of Spanish government portals:

1. **Avoid Cl@ve QR automation**: It requires manual phone approval and cannot be automated.
2. **Use Cl@ve PIN instead** (if needed): SMS-based codes are automatable with care.
3. **Digital certificates** (idCAT Certificat): Browser-specific, complex to automate.
4. **Video identification**: Not automatable (requires human face+document photos).
5. **PDF downloads**: Use `curl` fallback, Playwright may fail on large files (>4MB).
6. **Rate limiting**: Add delays between form submissions to avoid blocks.

## Next Steps After Form Submission

1. **Modelo 036 receipt**: Save PDF to `output/pdfs/`
2. **RETA registration**: Complete separately (may require separate visit/authentication)
3. **Document gathering**: empadronamiento certificate, NIE copies, bank proof
4. **Grant applications**: Kit Digital, Activa Autòno+ (after Modelo 036 + RETA approved)
5. **Quarterly taxes**: Set calendar reminders for Form 303/130 deadlines

## License

This automation tool is for educational purposes. Always comply with government portal terms of service and obtain proper authorization before automating real transactions.

## Support

See `research/` directory for detailed status reports and analysis:
- `status-report.md` - Lessons learned from previous automation attempts
- `ALL_REQUIRED_DATA_SUMMARY.csv` - Complete field mapping and constraints
