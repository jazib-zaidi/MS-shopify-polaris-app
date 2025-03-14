import { Page, Layout, Card, Button, Text, BlockStack, InlineStack, Link } from "@shopify/polaris";
import { Outlet } from "@remix-run/react";

export default function MuzaaraBingSetupPage() {
  return (
    <Page>
      <BlockStack gap="500">
        <Text variant="headingLg" as="h1">
          Welcome to Muzaara Bing Shopping & PMax for Shopify
        </Text>

        <Card>
          <Card.Section>
            <InlineStack gap="300" align="start">
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#f1f8ff",
                color: "#2c6ecb",
                fontWeight: "bold",
                flexShrink: 0,
                marginTop: "2px"
              }}>
                1
              </div>
              <BlockStack gap="200">
                <Text variant="headingMd" as="h2">
                  To proceed, make sure you have a Microsoft Advertising account
                </Text>
                <Text variant="bodyMd" as="p">
                  You need one to get started{" "}
                  <Link url="#" external>
                    Click here to create one
                  </Link>
                </Text>
                <Text variant="bodyMd" as="p">
                  Come back to this page once you have completed sign up to continue setup through Shopify
                </Text>
              </BlockStack>
            </InlineStack>
          </Card.Section>
        </Card>

        <Card>
          <Card.Section>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">
                Important Information
              </Text>
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd">
                  • Product images cannot contain anything in the background
                </Text>
                <Text as="p" variant="bodyMd">
                  • All products require a title and descriptions
                </Text>
                <Text as="p" variant="bodyMd">
                  • Products must conform to{" "}
                  <Link url="#" external>
                    Microsoft Advertising policies
                  </Link>
                </Text>
              </BlockStack>
            </BlockStack>
          </Card.Section>
        </Card>

        <div style={{ paddingTop: "16px", paddingBottom: "16px" }}>
          <Button primary size="large">
            <InlineStack gap="200" align="center">
              <span>Sign in with Microsoft</span>
            </InlineStack>
          </Button>
        </div>

        <div style={{ textAlign: "center", padding: "16px 0", color: "#637381" }}>
          <Text variant="bodySm" as="p">
            © 2024 Muzaara powered by feedOps.com
          </Text>
        </div>
      </BlockStack>
      <Outlet />
    </Page>
  );
}
