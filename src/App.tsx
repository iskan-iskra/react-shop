import { Route, Routes } from "react-router-dom";
import { DesktopLayout, MobileLayout } from "@layout";
import { MainPage, ProductsPage, AboutPage, ErrorPage, CartPage } from "@page";
import { useBreakPoint, useMobileVh, usePreloader } from "@use";

function App() {
  const { isScreenLg } = useBreakPoint();
  useMobileVh();
  usePreloader();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isScreenLg ? <DesktopLayout /> : <MobileLayout />}
        >
          <Route index element={<MainPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
