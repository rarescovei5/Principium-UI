import {
  Breadcrumb,
  BreadcrumbHead,
  BreadcrumbLink,
} from './ModernTheme/BreadCrumb';

function App() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <BreadcrumbLink to="/components">Components</BreadcrumbLink>
        <BreadcrumbHead>Breadcrumb</BreadcrumbHead>
      </Breadcrumb>
    </>
  );
}

export default App;
