# ActionLens 🔎

### From confusing notices to clear, personalized actions.

ActionLens is an AI-powered platform that helps students understand important notices such as scholarships, internships, competitions, exams, and college opportunities.

Instead of simply summarizing a notice, ActionLens extracts the important information, checks it against the user's profile, identifies missing requirements, and generates a prioritized action plan.

## 🚨 Problem

Students receive important opportunities through long and unstructured PDFs or notices.

They often have to manually figure out:

- Am I eligible?
- What is the deadline?
- What documents do I need?
- What am I missing?
- What should I do first?

Important opportunities can therefore be missed because the information is difficult to process and act upon.

## 💡 Solution

ActionLens transforms:

**Unstructured Notice → AI Understanding → Personalization → Action Plan**

The user uploads a notice, and ActionLens:

1. Analyzes the document using AI.
2. Extracts deadlines, eligibility criteria, and requirements.
3. Compares the requirements with the user's profile.
4. Identifies missing documents or requirements.
5. Generates a prioritized list of actions.

## 🔥 Example

A scholarship notice may require:

- CSE/IT student
- 2nd–4th year
- CGPA ≥ 7.5
- College ID
- Income Certificate

ActionLens can produce:

```text
Eligibility: ✅ Eligible

Deadline: 22 September

Requirements:
✅ College ID
❌ Income Certificate

Next Actions:
1. Obtain Income Certificate
2. Prepare required documents
3. Submit application before the deadline

## ☁️ AWS Architecture

                User
                 ↓
        HTML / CSS / JavaScript
                 ↓
            API Gateway
                 ↓
            AWS Lambda
                 ↓
 ┌───────────────┬───────────────┐
 ↓               ↓               ↓
S3            Bedrock         DynamoDB
 ↓               ↓               ↓
Document       AI Analysis    User/Data
Storage
        \         |          /
             Result
                ↓
           User Dashboard