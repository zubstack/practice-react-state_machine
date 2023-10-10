# State Properties

States are fundamental components in systems and applications that follow a specific workflow. Each state is characterized by a set of properties that help manage its behavior and transition to other states. Here is a detailed description of these properties:

- **Value:** This property indicates the name or identifier of the current state. It serves as a label or reference to identify the state in which the system is.

- **Context:** The context provides additional information about the current state. This information is useful for understanding the purpose and conditions surrounding the state in question.

- **Event:** The event refers to the action or condition that led the system to the current state. It is essential for understanding the workflow and how it reached that point.

- **Action:** This property represents a set of actions that must be executed in the current state. It can be an array of actions that need to be carried out while the system remains in this state.

- **Activities:** Here is a list of activities associated with the current state. Additionally, it indicates whether these activities are in progress or not, allowing for more detailed tracking of what is happening in the state.

- **History:** Indicates the previous state before the current one. This is important for tracking the sequence of states and understanding how the current state was reached.

- **Meta:** Metadata is additional information or relevant details associated with the state. This metadata can be useful for various purposes, such as state management and analysis.

- **NextEvents:** Here, the possible events that can occur from the current state are listed. These events represent possible transitions from the current state to other states.