import { lazy, Suspense } from "react";

import { Center, Container, Loader } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteHeader } from "src/components";
import { ErrorNotFound } from "src/components/ErrorNotFound";

const Home = lazy(() => import("./pages/Home"));
function Router() {
  const Load = (
    <Center mt={10} pt={50}>
      <Loader />
    </Center>
  );

  return (
    <BrowserRouter>
      <SiteHeader />
      <Container size="lg">
        <Suspense fallback={Load}>
          <Routes>
            <Route path="*" element={<ErrorNotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
