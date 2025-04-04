import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Lab from "@/pages/lab";
import Resources from "@/pages/resources";
import Documentation from "@/pages/documentation";
import MainLayout from "@/components/layout/MainLayout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lab/:labId" component={Lab} />
      <Route path="/resources" component={Resources} />
      <Route path="/documentation" component={Documentation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
