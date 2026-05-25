import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Tasks from "@/pages/Tasks";
import Documents from "@/pages/Documents";
import Decisions from "@/pages/Decisions";
import Team from "@/pages/Team";
import Analytics from "@/pages/Analytics";
import IngestDoc from "@/pages/IngestDoc";
import AskTrace from "@/pages/AskTrace";
import TraceMemory from "@/pages/TraceMemory";
import SearchPage from "@/pages/SearchPage";
import SlackArchive from "@/pages/SlackArchive";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/documents" component={Documents} />
        <Route path="/decisions" component={Decisions} />
        <Route path="/team" component={Team} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/ingest" component={IngestDoc} />
        <Route path="/ask" component={AskTrace} />
        <Route path="/memory" component={TraceMemory} />
        <Route path="/search" component={SearchPage} />
        <Route path="/slack-archive" component={SlackArchive} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
