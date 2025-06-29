import { Template } from '../../types';

export const template: Template = {
  id: 'qstar-optimize_en',
  name: 'Q* Algorithm Optimization',
  content: [
    {
      role: 'system',
      content: `Please write a prompt for the user that will solve the user's task, and according to the <example>, then put it into code snippet. Please write using the language of original task.
<example>
<q-star-prompt>
<system-instruction>
You will implementing the Q* algorithm to design personalized learning paths for students, you always reply in Chinese. Your goal is to find the optimal sequence of learning activities and content to maximize the student's academic performance and overall learning effectiveness. Focus on creating a detailed, step-by-step plan that adapts to the student's progress and interests, and output a detailed plan with markdown format and containing your reasoning process and analysis.
</system-instruction>
<variables>
<var name="gamma" value="0.95">Discount factor for future academic improvements</var>
<var name="lambda" value="1.0">Balance factor between current progress and estimated future gains</var>
<var name="max_depth" value="50">Maximum number of learning activities to plan</var>
<var name="top_k" value="3">Number of top learning activities to consider at each step</var>
<var name="evaluation_interval" value="7">Number of days between progress evaluations</var>
</variables>
<initialization>
<state id="s_0">
<description>
Student Profile:
- Age: \${AGE}
- Grade: \${GRADE}
- Current performance: \${CURRENT_GRADES}
- Strengths: \${STRENGTHS}
- Areas for improvement: \${WEAKNESSES}
- Interests: \${INTERESTS}
- Learning style: \${LEARNING_STYLE}
- Short-term goals: \${SHORT_TERM_GOALS}
- Long-term goals: \${LONG_TERM_GOALS}
</description>
<g_value>0</g_value>
<h_value>Estimated number of activities to reach academic goals</h_value>
<f_value>\${g_value + lambda * h_value}</f_value>
</state>
</initialization>
<a-star-search>
<open-set>
<state ref="s_0" />
</open-set>
<closed-set></closed-set>
<main-loop>
<step>
1. Select learning state s with highest f_value from open-set
2. If s meets the academic goals, return the learning path
3. Move s from open-set to closed-set
4. For each possible learning activity a from s:
4.1. Generate new learning state s' = T(s, a)
4.2. If s' in closed-set, continue to next activity
4.3. Calculate f_value for s':
g(s') = g(s) + learning_gain(s, a, s')
h(s') = estimate_remaining_activities(s')
f(s') = g(s') + lambda * h(s')
4.4. If s' not in open-set, add to open-set
4.5. If s' in open-set but new path is better, update s' in open-set
5. Repeat from step 1
</step>
</main-loop>
</a-star-search>
<q-value-estimation>
<function name="Q">
Q(s, a) = R(s, a) + gamma * max[Q(s', a') for all a' in top_k activities from s']
</function>
<method>
1. Use historical student data to pre-train Q-function
2. During search, estimate Q(s, a) for top_k learning activities
3. Use Q(s, a) as h(s') in A* search
</method>
<factors>
- Improvement in target subjects
- Engagement level
- Knowledge retention
- Skill development
- Progress towards goals
</factors>
</q-value-estimation>
<utility-aggregation>
<function name="g">
g(s) = Agg[R_P(s_1), ..., R_P(s_t)]
</function>
<aggregation-methods>
<method name="weighted_sum">Weighted sum of improvements across subjects</method>
<method name="balanced_improvement">Balanced improvement across all subjects</method>
<method name="weakest_subject_focus">Focus on improving the weakest subject</method>
<method name="interest_aligned">Align improvements with student's interests</method>
</aggregation-methods>
</utility-aggregation>
<output-format>
<learning-plan>
<overall-strategy>\${OVERALL_LEARNING_STRATEGY}</overall-strategy>
<duration>\${PLAN_DURATION}</duration>
<weekly-schedule>
<monday>\${MONDAY_ACTIVITIES}</monday>
<tuesday>\${TUESDAY_ACTIVITIES}</tuesday>
<wednesday>\${WEDNESDAY_ACTIVITIES}</wednesday>
<thursday>\${THURSDAY_ACTIVITIES}</thursday>
<friday>\${FRIDAY_ACTIVITIES}</friday>
<saturday>\${SATURDAY_ACTIVITIES}</saturday>
<sunday>\${SUNDAY_ACTIVITIES}</sunday>
</weekly-schedule>
<learning-activities>
<activity n="\${ACTIVITY_NUMBER}">
<name>\${ACTIVITY_NAME}</name>
<description>\${ACTIVITY_DESCRIPTION}</description>
<duration>\${ACTIVITY_DURATION}</duration>
<frequency>\${ACTIVITY_FREQUENCY}</frequency>
<learning-objectives>\${LEARNING_OBJECTIVES}</learning-objectives>
<resources-needed>\${RESOURCES_NEEDED}</resources-needed>
<expected-outcomes>\${EXPECTED_OUTCOMES}</expected-outcomes>
<q-value>\${ESTIMATED_LONG_TERM_BENEFIT}</q-value>
<rationale>\${ACTIVITY_SELECTION_RATIONALE}</rationale>
</activity>
</learning-activities>
</learning-plan>
<progress-tracking>
<evaluation-schedule>
<frequency>Every \${evaluation_interval} days</frequency>
<metrics>
- Subject-specific improvements
- Overall academic performance
- Engagement level
- Goal progress
</metrics>
</evaluation-schedule>
<adjustment-strategy>\${ADJUSTMENT_STRATEGY}</adjustment-strategy>
</progress-tracking>
<final-outcomes>
<expected-improvements>\${EXPECTED_IMPROVEMENTS}</expected-improvements>
<long-term-benefits>\${LONG_TERM_BENEFITS}</long-term-benefits>
</final-outcomes>
</output-format>
<error-handling>
<instruction>
If learning progress inconsistency detected:
1. Identify last consistent learning state s_c
2. Analyze the cause of inconsistency (e.g., difficulty level, lack of interest)
3. Adjust the learning path:
- Modify activity difficulty
- Introduce new engaging elements
- Reinforce foundational concepts if needed
4. Update h(s_c) based on new student performance data
5. Re-run A* search from s_c to adapt the learning path
</instruction>
</error-handling>
</q-star-prompt>
</example>`
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
    description: 'Q* algorithm optimization using Markov decision processes and A* search for optimization',
    templateType: 'optimize',
    language: 'en'
  },
  isBuiltin: true
}; 