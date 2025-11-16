# Component Architecture - Risk Management Features

## Overview

This document details the component architecture for the risk management features in Easy Risk Register, showing how components interact and the data flow between them.

## Component Hierarchy

```mermaid
graph TD
    A[App] --> B[DashboardLayout]
    B --> C[Header]
    B --> D[Sidebar]
    B --> E[MainContent]
    
    E --> F[Dashboard]
    E --> G[RiskList]
    E --> H[RiskMatrix]
    E --> I[RiskFormModal]
    
    F --> J[RiskSummaryCards]
    F --> K[RiskChart]
    
    G --> L[RiskCardList]
    L --> M[RiskCard]
    
    H --> N[RiskMatrixGrid]
    N --> O[RiskMatrixCell]
    
    I --> P[RiskForm]
    P --> Q[InputComponents]
    P --> R[SelectComponents]
    P --> S[ButtonComponents]
    
    M --> T[StatusBadge]
    M --> U[CategoryTag]
    M --> V[ActionButtons]
    
    classDef layout fill:#f9f
    classDef feature fill:#9f9
    classDef ui fill:#9ff
    classDef form fill:#ff9
    
    class B,C,D layout
    class F,G,H feature
    class M,N,Q,R,S,T,U,V ui
    class I,P form
```

## Risk Card Component Architecture

```plantuml
@startuml
!theme plain
title Risk Card Component - Detailed Architecture

package "RiskCard Component" {
  
  package "Props Interface" as Props {
    [Risk Object] as RiskObj
    [OnEdit Handler] as OnEdit
    [OnDelete Handler] as OnDelete
    [OnSelect Handler] as OnSelect
  }
  
  package "Internal State" as State {
    [Hover State] as Hover
    [Animation State] as Anim
    [Selection State] as Selection
  }
  
  package "Child Components" as Children {
    [Title Display] as Title
    [Description Preview] as Desc
    [Risk Score Display] as Score
    [Status Indicator] as Status
    [Category Tag] as Category
    [Action Buttons] as Actions
  }
  
  package "Event Handlers" as Handlers {
    [onEditClick()] as EditClick
    [onDeleteClick()] as DeleteClick
    [onSelectClick()] as SelectClick
    [onMouseEnter()] as MouseEnter
    [onMouseLeave()] as MouseLeave
  }
}

Props --> State : Receives initial state
State --> Children : Controls appearance
Children --> Handlers : Triggers events
Handlers --> Props : Communicates changes

note right of Children
  Reusable UI elements
  Consistent styling
  Accessible interactions
end note

@enduml
```

## Risk Form Architecture

```mermaid
flowchart LR
    A[RiskForm Component] --> B[Form State Management]
    A --> C[Validation Logic]
    A --> D[Submission Handler]
    
    B --> E[Zustand Form Integration]
    C --> F[React Hook Form Validation]
    D --> G[Risk Creation/Update Logic]
    
    E --> H[Form Fields]
    F --> H
    G --> I[Store Update]
    
    H --> J[Input Components]
    H --> K[Select Components] 
    H --> L[TextArea Components]
    
    I --> M[UI Update]
    M --> N[Success/Error Feedback]

    style A fill:#e1f5fe
    style H fill:#f3e5f5
    style M fill:#e8f5e8
```

## Data Flow Architecture

### Risk Creation Flow

```plantuml
@startuml
!theme plain
title Risk Creation Data Flow

participant "RiskForm Component" as Form
participant "React Hook Form" as RHF
participant "Zustand Store" as Store
participant "Local Storage" as Storage
participant "UI Components" as UI

Form -> RHF: Submit form data
RHF -> Form: Validate data
alt Validation passes
  Form -> Store: addRisk(data)
  Store -> Store: calculateRiskScore()
  Store -> Store: updateState()
  Store -> Storage: persistData()
  Store -> UI: notifyRiskAdded()
  UI -> Form: Reset form
else Validation fails
  RHF -> Form: showErrors()
  Form -> Form: Highlight errors
end

note right of Store
  Risk score calculated as:
  riskScore = probability × impact
end note

@enduml
```

## Component State Management

### Zustand Store Pattern

```mermaid
graph TD
    A[Risk Store] --> B[Risk State]
    A --> C[Category State] 
    A --> D[Settings State]
    
    B --> E[Risk Array]
    B --> F[Loading State]
    B --> G[Error State]
    
    C --> H[Category List]
    D --> I[Theme Setting]
    D --> J[Display Preferences]
    
    E --> K[addRisk Action]
    E --> L[updateRisk Action]
    E --> M[deleteRisk Action]
    E --> N[calculateRiskScore Action]
    
    K --> O[RiskForm]
    L --> P[RiskCard]
    M --> Q[RiskList]
    N --> R[RiskMatrix]

    classDef store fill:#e1f5fe
    classDef state fill:#f3e5f5
    classDef actions fill:#e8f5e8
    classDef components fill:#fff3e0
    
    class A store
    class B,C,D,E,F,G,H,I,J state
    class K,L,M,N actions
    class O,P,Q,R components
```

## Responsive Component Architecture

### Layout Components Structure

```plantuml
@startuml
!theme plain
title Responsive Layout Architecture

package "DashboardLayout" as Layout {
  
  package "Header Component" as Header {
    [App Title] as Title
    [Navigation] as Nav
    [User Controls] as Controls
  }
  
  package "Sidebar Component" as Sidebar {
    [Navigation Menu] as Menu
    [Filter Controls] as Filters
    [Export Options] as Export
  }
  
  package "Main Content" as Main {
    [Dashboard View] as Dashboard
    [Risk List View] as RiskList
    [Risk Matrix View] as RiskMatrix
  }
  
  package "Responsive Breakpoints" as Breakpoints {
    [Desktop: Full Layout] as Desktop
    [Tablet: Collapsible Sidebar] as Tablet
    [Mobile: Header Only] as Mobile
  }
}

Header -[hidden]right- Sidebar
Sidebar -[hidden]down- Main

Breakpoints --> Layout : Controls visibility

note bottom of Layout
  Desktop: Sidebar visible, main content area
  Tablet: Sidebar collapsible, main content adjusts
  Mobile: Header only, sidebar becomes overlay
end note

@enduml
```

## Form Validation Architecture

### Input Validation Flow

```mermaid
flowchart TD
    A[User Enters Data] --> B[Real-time Validation]
    B --> C{Field Valid?}
    C -->|Yes| D[Enable Submit Button]
    C -->|No| E[Show Error Message]
    D --> F[Accumulate Valid Fields]
    E --> A
    F --> G[Form Submit Enabled]
    G --> H[Final Validation]
    H --> I{All Fields Valid?}
    I -->|Yes| J[Submit Form]
    I -->|No| K[Scroll to First Error]
    J --> L[Process Data]
    K --> E

    style A fill:#e1f5fe
    style J fill:#e8f5e8
    style E fill:#ffebee
</flowchart>

## Risk Matrix Visualization Architecture

```plantuml
@startuml
!theme plain
title Risk Matrix Visualization Component

package "RiskMatrix Component" {
  
  package "Data Input" as Input {
    [Risk Data] as Risks
    [Filter Criteria] as Filters
    [Display Settings] as Settings
  }
  
  package "Calculation Layer" as Calc {
    [Position Calculator] as Position
    [Severity Classifier] as Severity
    [Category Grouping] as Grouping
  }
  
  package "Visualization Layer" as Viz {
    [Grid Renderer] as Grid
    [Risk Marker Renderer] as Markers
    [Label Renderer] as Labels
    [Interaction Handler] as Interaction
  }
  
  package "Output" as Output {
    [Interactive Matrix] as Matrix
    [Risk Details Panel] as Details
    [Selection Feedback] as Feedback
  }
}

Input --> Calc : Provides data
Calc --> Viz : Provides coordinates
Viz --> Output : Renders visualization
Output --> Input : Updates filters

note right of Output
  5x5 probability-impact grid
  Color-coded by severity
  Interactive risk selection
end note

@enduml
```

## Accessibility Architecture

### ARIA Implementation

```mermaid
graph LR
    A[Component] --> B[ARIA Labels]
    A --> C[ARIA Roles]
    A --> D[ARIA States]
    A --> E[Focus Management]
    
    B --> F[Screen Reader Support]
    C --> F
    D --> G[Keyboard Navigation]
    E --> G
    
    F --> H[Assistive Technology]
    G --> H
    
    style A fill:#e1f5fe
    style H fill:#e8f5e8
```

## Performance Optimization Architecture

### Optimized Component Rendering

```plantuml
@startuml
!theme plain
title Performance Optimization Architecture

package "Performance Components" {
  
  package "Memoized Components" as Memo {
    [RiskCard] as Card
    [RiskMatrixCell] as Cell
    [FilterComponent] as Filter
  }
  
  package "Virtual Scrolling" as Virtual {
    [RiskList] as List
    [InfiniteLoader] as Loader
  }
  
  package "Lazy Loading" as Lazy {
    [ModalContents] as Modal
    [TabContents] as Tabs
  }
  
  package "Debounced Operations" as Debounced {
    [SearchFilter] as Search
    [RiskMatrixUpdate] as MatrixUpdate
  }
}

Memo --> Virtual : Reduces render operations
Virtual --> Lazy : Optimizes initial load
Lazy --> Debounced : Prevents excessive updates

note bottom
  Components only re-render when necessary
  Large lists handled efficiently
  User interactions optimized
end note

@enduml
```

This component architecture documentation provides a detailed view of how the risk management features are structured, showing the relationships between components and the flow of data through the application.