import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Servicos from "@/pages/Servicos";
import Orcamento from "@/pages/Orcamento";
import VideosFotos from "@/pages/VideosFotos";
import ClientesParceiros from "@/pages/ClientesParceiros";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/orcamento" component={Orcamento} />
      <Route path="/videos-fotos" component={VideosFotos} />
      <Route path="/clientes-parceiros" component={ClientesParceiros} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
