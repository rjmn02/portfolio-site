# CV Updates Design — Traffic Law Chatbot Production Upgrades

## Summary
Add production upgrade details to the traffic law chatbot project entry and update skill categories.

## Changes

### 1. Traffic Law Chatbot Project Entry
**Location:** `app/lib/cv-data.ts` (project id: 1)

**Change:** Add a 4th bulletpoint to `details` array:
> "Post-thesis, upgraded the RAG pipeline to Llama 70B via Groq API and increased text chunking from 200 to 1000 tokens with 200 token overlap, significantly reducing hallucinations and improving response accuracy."

This preserves the original thesis foundation while highlighting the production evolution.

### 2. Skills Update
**Location:** `app/lib/cv-data.ts` (skills and skillCategories)

**Changes:**
- In `skills` array: Replace `"Groq API"` with `"LLMs"`, replace `"Hugging Face Embeddings"` with `"NLP"`
- In `skillCategories.AI/ML`: Update accordingly to `["LLMs", "NLP"]`

## Rationale
- The production upgrade demonstrates continued improvement beyond the initial thesis
- Skill renames simplify the skill list while maintaining professional relevance