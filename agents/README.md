# AI Agents

This directory contains the configuration and resources for the custom AI agent system used in this project.

## Structure

- `config/` - Agent configuration files and system definitions ([README](config/README.md))
- `prompts/` - Prompt templates and instruction guides for different agent types
- `tools/` - Tool definitions and integrations that agents can utilize ([README](tools/README.md))

## Overview

The custom agent system provides specialized assistance for different aspects of the Easy Risk Register project:
- Development tasks
- Documentation management
- Testing and quality assurance
- Architecture and design decisions
- Deployment and operations
- Specification verification and alignment

Each agent is configured with role-specific instructions and access to appropriate tools to assist with project tasks.

## Available Agents

All agent prompt templates are located in the `prompts/` directory:

- `devops-engineer.md` - Deployment and operations specialist
- `product-manager.md` - Product planning and requirements specialist
- `qa-analyst.md` - Quality assurance and testing specialist
- `security-analyst.md` - Security assessment and implementation specialist
- `sr-backend-engineer.md` - Backend development specialist
- `sr-frontend-engineer.md` - Frontend development specialist
- `system-architect.md` - System architecture and design specialist
- `ux-ui-designer.md` - User experience and interface design specialist
- `specification-compliance-verifier.md` - Comprehensive specification compliance and quality assurance specialist
- `feature-documentation-verifier.md` - Focused verification of feature-code-documentation alignment
- `spec-alignment-verifier.md` - Strict specification adherence and alignment verification specialist