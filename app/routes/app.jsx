import { Link, Outlet, useLoaderData, useRouteError, useLocation } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";
import { PageProvider, usePage } from "./PageContext"; // Import PageProvider and hook
import { useEffect } from "react";
import { FooterHelp } from "@shopify/polaris";
import '../app.css'


export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <PageProvider>
        {/* <PageTracker /> Tracks and updates the current page */}
        <NavMenu>
          <Link to="/app" rel="home">
            Home
          </Link>
          <Link to="/app/additional">Manage product</Link>
          <Link to="/app/Pmax-campaigns">PMax Campaigns</Link>
          <Link to="/app/settings">Settings</Link>
          <Link to="/app/help">Help</Link>
          <Link to="/app/setup-conversion-tracking">Set Up conversion</Link>
          <Link to="/app/campaign-setting-screen">campaign-setting-screen</Link>
          <Link to="/app/AudienceTargetingModalComponent">AudienceTargetingModalComponent</Link>
          <Link to="/app/AudienceSignalsModalComponent">AudienceSignalsModalComponent</Link>

        </NavMenu>
        <Outlet />
        <FooterHelp>
        &#169; 2025 Muzaara powered by {' '}
      <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
        feedOps.com
      </Link>
    </FooterHelp>
      </PageProvider>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
