import { Toaster } from "./sonner";
import { TooltipProvider } from "./tooltip";
import NotFound from "./NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import ServiceAreas from "./ServiceAreas";
import LocationDetail from "./LocationDetail";
import Blog from "./Blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-areas/:slug" component={LocationDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
