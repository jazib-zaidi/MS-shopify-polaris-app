import { Page, Layout, Card, InlineStack, BlockStack, Text, ProgressBar } from "@shopify/polaris";
import { Outlet } from "@remix-run/react";
import { usePage } from "./PageContext"; // Import usePage to access current page
import styles from "./_index/styles.module.css";

export default function InitialSettings() {
  const { steps } = usePage(); // Get current page from context
  console.log("Current Page:", steps);

  // Step mapping based on URL path
  // const steps = [
  //   { id: 1, label: "Connect ads account", path: "/settings/ads", status: "inProgress" },
  //   { id: 2, label: "Microsoft Ads Billing Status", path: "/settings/billing", status: "notComplete" },
  //   { id: 3, label: "Store information", path: "/settings/store", status: "notComplete" },
  // ];

  // Function to get progress percentage based on status
  const getProgress = (status) => {
    switch (status) {
      case "inProgress":
        return 50;
      case "completed":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <Page>
      <BlockStack gap={300}>
        <Layout>
          <Layout.Section>
            <Card>
              <InlineStack align="center" gap="tight">
                
                {steps.map((step, index) => (
                  <div key={index} style={{ width: 300 }}>
                    <span className={ `${styles.progressCount} ${step.status}`}>{step.id}</span>
                    <BlockStack gap={300}>
                      <ProgressBar progress={getProgress(step.status)} size="small" />
                      <Text as="p" variant="bodyLg">
                        {step.label}
                      </Text>
                      {/* Highlight the current step based on currentPage */}
                      {/* {currentPage === step.path && <Text fontWeight="bold">You are here</Text>}// */}
                    </BlockStack>
                  </div>
                ))}
              </InlineStack>
            </Card>
          </Layout.Section>
        </Layout>
        <Outlet />
      </BlockStack>
    </Page>
  );
}
