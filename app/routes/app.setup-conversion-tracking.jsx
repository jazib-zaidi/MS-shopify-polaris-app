import { Page, Card, Text, BlockStack, InlineStack, ProgressBar, Button } from "@shopify/polaris";

export default function SetupConversionTracking() {
  return (
    <Page>
      <Card>
        <BlockStack gap="500" padding="500">

          <InlineStack gap="400" align="space-between">
            <InlineStack gap="400" align="center">
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#2c6ecb",
                color: "white",
                fontWeight: "bold",
                flexShrink: 0
              }}>
                1
              </div>
              <Text variant="headingMd" as="h2">
                Setup Conversion Tracking
              </Text>
            </InlineStack>
            <InlineStack gap="400" align="center">
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#f6f6f7",
                color: "#6d7175",
                fontWeight: "bold",
                flexShrink: 0
              }}>
                2
              </div>
              <Text variant="bodyMd" color="subdued">
                Create Campaign
              </Text>
            </InlineStack>
          </InlineStack>

          {/* Progress Bar */}
          <div style={{ padding: "0 16px" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ flex: 1, height: "4px", backgroundColor: "#2c6ecb", borderRadius: "2px" }}></div>
              <div style={{ flex: 1, height: "4px", backgroundColor: "#f6f6f7", borderRadius: "2px", marginLeft: "4px" }}></div>
            </div>
          </div>

          <BlockStack gap="400">
            <Text variant="bodyMd" as="p">
              These will be used to train Microsoft AI and optimize your bidding.
            </Text>

            <BlockStack gap="300">
              <InlineStack gap="200" align="start">
                <Text variant="bodyMd">•</Text>
                <Text variant="bodyMd" as="span" fontWeight="bold">
                  Revenue (Target ROAS)
                </Text>
                <Text variant="bodyMd" as="span" color="subdued">
                  - Used for bidding and training Microsoft AI
                </Text>
              </InlineStack>

              <InlineStack gap="200" align="start">
                <Text variant="bodyMd">•</Text>
                <Text variant="bodyMd" as="span" fontWeight="bold">
                  Add to Cart
                </Text>
                <Text variant="bodyMd" as="span" color="subdued">
                  - Used for remarketing training Microsoft AI
                </Text>
              </InlineStack>

              <InlineStack gap="200" align="start">
                <Text variant="bodyMd">•</Text>
                <Text variant="bodyMd" as="span" fontWeight="bold">
                  Product View
                </Text>
                <Text variant="bodyMd" as="span" color="subdued">
                  - Used for remarketing training Microsoft AI
                </Text>
              </InlineStack>
            </BlockStack>
          </BlockStack>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
            <Button primary>Set up Conversion Tracking</Button>
          </div>
        </BlockStack>
      </Card>
    </Page>
  );
}
