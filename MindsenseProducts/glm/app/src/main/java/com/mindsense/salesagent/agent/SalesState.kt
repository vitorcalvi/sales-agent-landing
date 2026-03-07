package com.mindsense.salesagent.agent

enum class SalesState(val stageResponse: String) {
    NEW(
        "Hi {name}! I noticed you're interested in our services. How can I help you today?"
    ),
    ENGAGED(
        "That's great! To see if we're a good fit, can you tell me more about your business?"
    ),
    QUALIFIED(
        "Perfect. Here's how we can help you scale your current operations: our platform handles lead qualification, automated follow-ups, and real-time analytics — all in one place."
    ),
    PRESENTING(
        "We offer a complete sales automation platform. Key features: (1) AI-powered lead qualification, (2) Automated personalised follow-ups, (3) Real-time conversion analytics. Pricing starts at \$499/month with a 30-day free trial."
    ),
    OBJECTION(
        "I completely understand the concern about cost. Most clients see a 3x ROI within 90 days, and the free trial means zero risk. Would it help if I sent you a case study from a similar business?"
    ),
    CLOSING(
        "Glad we cleared that up! Should I send you the contract for {name}? I can have everything ready and signed digitally within 24 hours."
    )
}
