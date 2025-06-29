import { Template } from '../../types';

export const template: Template = {
  id: 'vari-optimize_en',
  name: 'Variational Optimization',
  content: [
    {
      role: 'system',
      content: `Please analyze and decompose the user's task, then transform it into a variational planning prompt. Please do not modify the prompt template, just decompose the task and fill in the template gaps. Finally output the prompt in a code block.
The prompt template is as follows:

You will use variational planning for content generation:
## 1. Content Generation Task Definition
Task Type: [Gap]
Target Audience: [Gap]

Main Objective: [Gap]
Content Theme: [Gap]
Content Constraints: [Gap]
## 2. State Space Definition
S = {
    s1: "Current topic",
    s2: "Generated content length",
    s3: "Target audience characteristics",
    s4: "Platform characteristics",
    s5: "Temporal factors",
    ...,
    sn: [Other relevant state variables]
}

## 3. Action Space Definition
A = {
    a1: "Select next paragraph topic",
    a2: "Determine paragraph length",
    a3: "Choose writing style",
    a4: "Insert keywords or phrases",
    a5: "Add multimedia elements",
    ...,
    am: [Other content generation related actions]
}

## 4. Variational Posterior Design
q(a|s) = {
    π1(a1|s): Categorical(α1),  // Topic selection distribution
    π2(a2|s): TruncatedNormal(μ2, σ2, min2, max2),  // Paragraph length distribution
    π3(a3|s): Categorical(α3),  // Writing style distribution
    π4(a4|s): Bernoulli(p4),  // Keyword insertion probability
    π5(a5|s): Categorical(α5),  // Multimedia element selection distribution
    ...,
    πm(am|s): [Other action distributions]
}

## 5. Reward Function Design
R(s, a, s') = w1 * Relevance score +
              w2 * Attractiveness rating +
              w3 * SEO performance +
              w4 * Reading time estimate -
              w5 * Constraint violation penalty

Where w1 to w5 are weight parameters.

## 6. Optimization Objective
Maximize ELBO = E_q[R(s,a,s')] - β * KL(q(a|s) || p(a))
Where p(a) is the prior distribution of actions, β is the weight of KL divergence.

## 7. Generation Process
1. Initialize content state
2. Loop until content completion:
  - Observe current state s
  - Sample action a from q(a|s)
  - Execute action a (generate content fragment)
  - Update state to s'
  - Calculate reward r
3. Update variational parameters based on cumulative reward

## 8. Output Format
For each generation step, output:
1. Current state summary
2. Selected action and its probability
3. Generated content fragment
4. Estimated partial reward

## 9. Content Diversity Control
Use entropy regularization or temperature parameters to control the diversity of generated content.

## 10. Adaptive Adjustment Strategy
[Explain how to dynamically adjust generation strategy based on content performance and external factors]

Usage Instructions:
1. Adjust state and action spaces according to specific content generation tasks.
2. Carefully design reward functions to reflect multiple aspects of content quality.
3. Balance exploration and exploitation by adjusting the β parameter.`
    },
    {
      role: 'user',
      content: `<Task>
{{originalPrompt}}
</Task>`
    }
  ],
  metadata: {
    version: '1.0',
    lastModified: 1704067200000, // 2024-01-01 00:00:00 UTC (固定值，内置模板不可修改)
    author: 'System',
    description: 'Variational optimization using variational planning for content generation and optimization',
    templateType: 'optimize',
    language: 'en'
  },
  isBuiltin: true
}; 