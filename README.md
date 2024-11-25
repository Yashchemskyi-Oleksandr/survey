## Getting Started

First, run the development server:

npm install

npm run dev
Open [http://localhost:3000] with your browser to see the result.
## OR
npm run build => npm run start
Open [http://localhost:3000] with your browser to see the result.


## Overview

This project provides a dynamic survey system that allows the admin to configure and manage surveys with flexible question types, dependencies, and dynamic components.

### Key Features

1. **Dynamic Text Replacement:**  
   Questions can include dynamic placeholders like `{questionId}`, which will be parsed and replaced with the actual values.

2. **Conditional Question Dependencies:**  
   Admins can configure the `dependsOn` field for questions, allowing the options for one question to depend on the answer to a previous one.

3. **Survey Navigation:**  
   The survey's question history is managed in Redux (`questionHistory`). Alternatively, navigation can be handled using `router.back()` or by storing previous question IDs.

4. **Dynamic Question Components:**  
   Questions can be rendered with dynamic components (`input`, `select`, `checkbox`, or `basic`). 

### Configuration Setup

1. **Survey Configurations:**  
   - `/config/survey.ts`: The basic survey configuration (without dynamic components).
   - `/config/survey_with_all_components.ts`: The survey configuration with dynamic components (input, select, checkbox, etc.).

2. **Switching Configurations:**  
   The survey configuration can be easily switched in `/config/index.ts`, allowing you to choose between a basic survey and a fully dynamic one.

