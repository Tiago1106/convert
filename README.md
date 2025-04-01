# Currency Converter

A currency conversion calculator that allows users to convert values from various international currencies to Brazilian reais (BRL) based on the latest exchange rates.

## Live Demo

You can check out the live demo of the project at [https://convert-tan.vercel.app/](https://convert-tan.vercel.app/).

## Features

- **Monetary Format Input**: Enter values in a formatted currency style (e.g., R$ 1,000.00), and the system will automatically handle the input format with thousand separators and commas for decimals.
- **Currency Selection**: Select from a list of supported currencies (USD, EUR, GBP, etc.) to convert to BRL.
- **Real-Time Exchange Rate Fetching**: The application retrieves exchange rates using an external API (Exchangerate API) with **React Query** and **Ky**, ensuring the latest data is always used.
- **Conversion Display**: After selecting the amount and currency, the app will display the converted amount in reais (BRL).
- **Responsive Design**: A clean and responsive UI to provide a seamless user experience across devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for building server-side rendered and statically generated web applications.
- **React Query**: Data-fetching and state management tool for React.
- **Ky**: Lightweight HTTP client for making API requests.
- **Next Theme**: A library for easily managing and toggling dark and light themes in a Next.js project.
- **Shadcn-ui**: A UI component library for building modern and customizable user interfaces with components like buttons, cards, and inputs.
- **Lucide React**: A collection of open-source, customizable icons for React applications.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. Install dependencies:

   ```bash
   yarn install
   ```
3. Run the application locally:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to http://localhost:3000 to use the currency converter.

## Usage
1. Enter the value to be converted in the input field.
2. Choose the source currency (e.g., USD, EUR, GBP) from the dropdown.
3. Click on the Convert to Reais button to see the converted value in BRL.
