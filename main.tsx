@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 98%;
    --foreground: 220 15% 15%;

    --card: 0 0% 100%;
    --card-foreground: 220 15% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 15% 15%;

    --border: 220 10% 88%;
    --input: 150 10% 95%;
    --ring: 150 28% 48%;

    --primary: 150 28% 48%;
    --primary-foreground: 0 0% 100%;

    --secondary: 150 10% 93%;
    --secondary-foreground: 220 15% 20%;

    --muted: 150 8% 93%;
    --muted-foreground: 220 10% 48%;

    --accent: 150 28% 48%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 72% 55%;
    --destructive-foreground: 0 0% 100%;

    --sidebar: 150 18% 96%;
    --sidebar-foreground: 220 12% 30%;
    --sidebar-border: 150 12% 88%;

    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: hsl(150 12% 80%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: hsl(150 15% 70%);
  }
}
