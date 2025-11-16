# System Architecture for Easy Risk Register

## Overview

Easy Risk Register is designed as a privacy-focused, client-side risk management application that operates entirely in the browser. The architecture emphasizes data privacy, performance, and usability while maintaining a clean separation of concerns for maintainability and future extensibility.

## Architecture Diagram

### High-Level System Architecture

```plantuml
@startuml
!theme plain
title Easy Risk Register - System Architecture

package "Browser Environment" {
  
  component "Easy Risk Register Frontend" as Frontend {
    component "React UI Layer" as UI
    component "State Management (Zustand)" as State
    component "Data Services" as DataService
    component "Local Storage API" as Storage
  }
  
  component "Browser Local Storage" as BrowserStorage
  component "IndexedDB (optional)" as IndexedDB
}

component "External Services" as External {
  component "PocketBase (self-hosted sync)" as PocketBase
}

UI --> State : State Management
State --> DataService : Data Operations
DataService --> Storage : Storage Operations
Storage --> BrowserStorage : Persists Data
Storage --> IndexedDB : Alternative Storage

BrowserStorage <--> PocketBase : Optional Sync
IndexedDB <--> PocketBase : Optional Sync

note top of Frontend
  Core application logic runs client-side
  All user data remains local by default
end note

note right of BrowserStorage
  Primary storage for risk data
  Maintains privacy by design
end note

@enduml
```

## Technology Stack

### Frontend Architecture

```plantuml
@startuml
!theme plain
title Easy Risk Register - Frontend Technology Stack

package "Frontend Application" {
  
  package "Build & Dev Tools" {
    [Vite] as BuildTool
    [TypeScript] as TypeLang
    [Jest] as Testing
  }
  
  package "UI & Framework" {
    [React 19.1.1] as React
    [Tailwind CSS] as Styling
    [Framer Motion] as Animation
    [NativeBase] as UIComponents
  }
  
  package "State & Logic" {
    [Zustand] as StateMgmt
    [React Hook Form] as FormLib
    [React Router] as Routing
  }
  
  package "Data Management" {
    [Browser Storage API] as StorageAPI
    [IndexedDB API] as IndexedDB
  }
}

React --> BuildTool
React --> TypeLang
Styling --> React
Animation --> React
UIComponents --> React

StateMgmt --> React
FormLib --> React
Routing --> React

StorageAPI --> React
IndexedDB --> React

note bottom of StorageAPI
  Primary: LocalStorage
  Alternative: IndexedDB for larger datasets
end note

@enduml
```

## Component Architecture

### Core Component Structure

```mermaid
graph TD
    A[App Root] --> B[DashboardLayout]
    A --> C[Header]
    A --> D[Sidebar]
    
    B --> E[Dashboard]
    B --> F[RiskList]
    B --> G[RiskMatrix]
    
    E --> H[RiskCard]
    E --> I[RiskForm]
    E --> J[RiskChart]
    
    F --> H
    G --> H
    G --> K[RiskMatrixCell]
    
    I --> L[Input Components]
    I --> M[Select Components]
    I --> N[Button Components]
    
    H --> O[Status Badge]
    H --> P[Category Tag]
    
    classDef uiComponents fill:#e1f5fe
    classDef layoutComponents fill:#f3e5f5
    classDef dataComponents fill:#e8f5e8
    
    class L,M,N,O,P uiComponents
    class B,C,D layoutComponents
    class H,I,J,K dataComponents
```

## Data Flow Architecture

### Risk Data Flow

```plantuml
@startuml
!theme plain
title Risk Data Flow - Creating and Managing Risks

start
:User opens Risk Creation Form;
:Form component initializes;
:User fills in risk details;
:Validation occurs in real-time;

if (Form is valid?) then (yes)
  :Risk data submitted;
  :Data processed by Zustand store;
  :calculateRiskScore() called;
  :riskScore = probability * impact;
  :Risk object created with calculated values;
  :Data saved to browser storage;
  :User receives success feedback;
else (no)
  :Validation errors displayed;
  :User corrects input;
  :Return to form validation;
endif

:Risk appears in risk list;
:Risk matrix updates automatically;
stop

note right
  All operations happen client-side
  No server communication required
  Data remains in user's browser
end note

@enduml
```

## State Management Architecture

### Zustand Store Pattern

```plantuml
@startuml
!theme plain
title State Management Architecture

package "Zustand Store" {
  
  package "Risk Store" as RiskStore {
    [Risks Array] as Risks
    [Risk Categories] as Categories
    [Application Settings] as Settings
  }
  
  package "Store Actions" as Actions {
    [addRisk()] as Add
    [updateRisk()] as Update
    [deleteRisk()] as Delete
    [calculateRiskScore()] as CalcScore
    [exportToCSV()] as Export
    [importFromCSV()] as Import
  }
  
  package "Selectors" as Selectors {
    [getRisksByCategory()] as ByCategory
    [getRisksByStatus()] as ByStatus
    [getHighRiskItems()] as HighRisk
  }
}

package "React Components" {
  [RiskForm] as Form
  [RiskCard] as Card
  [RiskList] as List
  [RiskMatrix] as Matrix
  [Dashboard] as Dashboard
}

Form --> Add : Calls
Form --> Update : Calls
Card --> Delete : Calls
List --> ByCategory : Uses Selector
Matrix --> CalcScore : Uses Function
Dashboard --> ByStatus : Uses Selector
Dashboard --> HighRisk : Uses Selector

RiskStore --> Form : Provides State
RiskStore --> Card : Provides State
RiskStore --> List : Provides State
RiskStore --> Matrix : Provides State
RiskStore --> Dashboard : Provides State

note top of RiskStore
  Single source of truth
  All data operations centralized
  Efficient state updates
end note

@enduml
```

## Security Architecture

### Client-Side Security Model

```plantuml
@startuml
!theme plain
title Security Architecture - Client-Side Model

package "Client-Side Security" {
  
  package "Input Sanitization" {
    [Form Validation] as FormValidation
    [XSS Prevention] as XSS
    [Data Type Checking] as DataType
  }
  
  package "Data Protection" {
    [Local Storage Isolation] as StorageIsolation
    [No Cross-Origin Requests] as CORS
    [Content Security Policy] as CSP
  }
  
  package "Privacy Controls" {
    [Data Export Controls] as ExportControls
    [User Consent for Sync] as Consent
    [Clear Data Functionality] as ClearData
  }
}

FormValidation --> XSS : Prevents Injection
DataType --> XSS : Ensures Valid Types
StorageIsolation --> CSP : Enforces Policy
CORS --> CSP : Prevents Unauthorized Access
ExportControls --> Consent : Requires Permission

note bottom
  All data remains on user's device by default
  No server-side processing of risk data
  Optional self-hosted sync maintains privacy
end note

@enduml
```

## Performance Optimization

### Performance Architecture

```mermaid
graph LR
    A[Performance Optimizations] --> B[Component Memoization]
    A --> C[Virtual Scrolling]
    A --> D[Lazy Loading]
    A --> E[Debounced Updates]
    A --> F[Efficient State Updates]

    B --> G[React.memo]
    B --> H[useMemo Hook]
    B --> I[useCallback Hook]
    
    C --> J[react-window/virtualized]
    D --> K[React.lazy + Suspense]
    E --> L[useDebounce Hook]
    F --> M[Zustand Selectors]

    style A fill:#ffcccc,stroke:#333,stroke-width:2px
    style B fill:#ccffcc
    style C fill:#ccffcc
    style D fill:#ccffcc
    style E fill:#ccffcc
    style F fill:#ccffcc
```

## For Frontend Engineers

### Component Architecture

#### Core Component Structure
```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   ├── risk/              # Risk-specific components
│   │   ├── RiskForm.tsx
│   │   ├── RiskCard.tsx
│   │   ├── RiskMatrix.tsx
│   │   └── ...
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── DashboardLayout.tsx
│   └── common/            # Shared utility components
├── pages/                 # Page components
│   ├── Dashboard.tsx
│   ├── RiskList.tsx
│   ├── RiskCreate.tsx
│   └── Settings.tsx
├── hooks/                 # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useForm.ts
│   └── useRiskCalculations.ts
├── stores/                # Zustand stores
│   └── riskStore.ts
├── types/                 # TypeScript type definitions
│   └── index.ts
└── utils/                 # Utility functions
    ├── calculations.ts
    ├── exports.ts
    └── validators.ts
```

## Data Architecture Specifications

### Entity Design

#### Risk Entity
- **Entity Name**: Risk
- **Purpose**: Represents a single risk item with all necessary attributes for risk management
- **Attributes**:
  - `id` (string, UUID, required, primary key)
  - `title` (string, max 200 chars, required)
  - `description` (string, max 1000 chars, optional)
  - `probability` (number, 1-5 scale, required)
  - `impact` (number, 1-5 scale, required)
  - `riskScore` (number, calculated as probability × impact, required)
  - `category` (string, predefined options, required)
  - `status` (string, 'open'|'mitigated'|'closed', default: 'open')
  - `mitigationPlan` (string, max 2000 chars, optional)
  - `creationDate` (ISOString, required)
  - `lastModified` (ISOString, required)

### Data Storage Strategy

#### Local Storage Implementation

```plantuml
@startuml
!theme plain
title Data Storage Architecture

package "Browser Storage Layer" {
  
  package "Storage API" as API {
    [LocalStorage Handler] as Local
    [IndexedDB Handler] as IndexedDB
  }
  
  package "Data Format" as Format {
    [JSON Serialization] as JSON
    [Data Migration Handler] as Migration
  }
  
  package "Stored Data" as Data {
    [Risks Array] as Risks
    [Categories Array] as Categories
    [Settings Object] as Settings
    [Version Info] as Version
  }
}

API --> Format : Serializes
Local --> Data : Stores/Retrieves
IndexedDB --> Data : Stores/Retrieves
Migration --> Data : Updates Schema

note right of Data
  Key: easy-risk-register-data
  Format: JSON string
  Size: Optimized for browser limits
end note

@enduml
```

This architecture provides a solid foundation for implementing the Easy Risk Register application while maintaining the privacy-first, client-side approach as specified in the product requirements. The modular design allows for future extensibility, including optional server-side features like cloud sync while preserving the core privacy-focused model.