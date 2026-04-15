# Sitges Grant Form Automation - Implementation Plan

## CRITICAL DISCOVERIES
1. **Python scripts are completely missing** - no automation.py or variants exist
2. **CSV data structure is complete and accurate** - ALL_REQUIRED_DATA_SUMMARY.csv has 117 lines with all required fields
3. **Field detection failed** in previous attempts ("Total fields detected: 0")
4. **Form structure likely changed** or requires iframe handling

## REBUILD STRATEGY

### Phase 1: Manual Form Analysis (DAY 1)
**Goal**: Understand the actual form structure at https://ciutada.idcat.aoc.cat/es/solicitar/form

**Steps**:
1. Load form in visible browser with Playwright
2. Take full-page screenshot
3. Use browser DevTools to inspect:
   - Is form inside iframe?
   - What are actual input field selectors?
   - What field detection strategies work?
4. Test field detection with simple selectors
5. Document actual HTML structure

### Phase 2: Robust Field Detection (DAY 2)
**Goal**: Create detection system that works with actual form

**Approach**:
1. **Multi-strategy detection** (from docs, but ensure it works):
   - Label matching (for/id)
   - Placeholder text
   - Name/ID attributes
   - ARIA labels
   - Spanish keyword mapping (calle, iban, etc.)
2. **Fallback selectors**: CSS selectors, XPath
3. **Debug mode**: Screenshot each field detection with highlighting
4. **Form mapping cache**: Save successful mappings to JSON for reuse

### Phase 3: Implementation (DAY 3)
**Goal**: Working automation that fills and submits form

**Files to create**:
- `automation.py` - Main entry point
- `requirements.txt` - Dependencies (playwright, pandas)
- `config.py` - Configuration (URL, CSV path)
- `field_detector.py` - Field detection logic
- `form_filler.py` - Filling logic
- `state_manager.py` - Progress persistence

### Phase 4: Testing & Verification (DAY 4)
**Goal**: Ensure reliable execution

**Test plan**:
- Dry run (no submit) with visible browser
- Verify all fields filled correctly
- Check screenshot evidence
- Test error recovery
- Validate state persistence

## SUCCESS CRITERIA

✅ Form loads successfully
✅ At least 90% of required fields detected (69/69 fields)
✅ All detected fields filled with correct data from CSV
✅ Screenshots captured at key stages
✅ State saved for resumption
✅ No errors in logs
✅ Form can be submitted (or manual review if captcha)

## RISKS & MITIGATIONS

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Form requires authentication | Medium | High | Test without auth first; if required, implement idCAT certificate handling or manual auth step |
| Captcha/anti-bot | High | High | Use visible mode, human-like delays; captcha may require manual solve |
| Form structure changed | Medium | High | Have fallback selectors; manual override capability |
| JavaScript validation | Medium | Medium | Ensure proper data formats; handle validation errors |
| Session timeout | Low | Medium | Implement retry logic; persistent browser context |

## NEXT IMMEDIATE ACTIONS

1. **Create basic Playwright script** to load form and take screenshot
2. **Inspect form HTML** to determine iframe/authentication needs
3. **Test simple field detection** with known field names
4. **Build field detector** based on actual structure

---

This plan will be executed once verification tasks complete. The automation rebuild is **URGENT** because:
- Grant application window expected May-July 2026
- Without automation, manual form filling will be time-consuming and error-prone
- Time is critical (already March 27, 2026)
