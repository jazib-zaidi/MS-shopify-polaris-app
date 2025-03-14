import {
  Modal,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Button,
  TextField,
  Checkbox,
  ProgressBar
} from "@shopify/polaris";
import { useState } from "react";

export default function AudienceSignalsModal() {
  const [open, setOpen] = useState(false);
  const [keywordThemes, setKeywordThemes] = useState("");
  const [signals, setSignals] = useState({
    websiteVisitors: true,
    productViewers: true,
    cartUsers: true
  });

  const handleSignalChange = (signal) => {
    setSignals({
      ...signals,
      [signal]: !signals[signal]
    });
  };

  const handleKeywordChange = (value) => setKeywordThemes(value);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const signalsSelected = Object.values(signals).filter(Boolean).length;

  return (
    <>

      <Button onClick={handleOpen}>Set Audience Signals</Button>


      <Modal
        open={open}
        onClose={handleClose}
        title="Set Audience Signals"
        primaryAction={{
          content: "Save Changes",
          onAction: handleClose,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
          <BlockStack gap="500">
            <Text variant="bodyMd" color="subdued">
              Configure audience preferences to improve targeting and campaign efficiency
            </Text>

            <BlockStack gap="200">
              <InlineStack align="space-between">
                <Text variant="bodyMd">Progress</Text>
                <Text variant="bodyMd">{signalsSelected} of 4 Signals Set</Text>
              </InlineStack>

              <div style={{ width: "100%" }}>
                <ProgressBar
                  progress={signalsSelected / 4 * 100}
                  size="small"
                  color="success"
                />
              </div>
            </BlockStack>

            <BlockStack gap="400">
              {["websiteVisitors", "productViewers", "cartUsers"].map((signal) => (
                <InlineStack key={signal} gap="300" align="start">
                  <div style={{ paddingTop: "2px" }}>
                    <Checkbox
                      checked={signals[signal]}
                      onChange={() => handleSignalChange(signal)}
                      label=""
                    />
                  </div>
                  <BlockStack gap="100">
                    <Text variant="bodyMd" fontWeight="semibold">
                      {signal === "websiteVisitors" && "Website Visitors"}
                      {signal === "productViewers" && "Product Viewers"}
                      {signal === "cartUsers" && "Add-to-Cart Users"}
                    </Text>
                    <Text variant="bodyMd" color="subdued">
                      {signal === "websiteVisitors" && "Users who have browsed your site but didn't take further action"}
                      {signal === "productViewers" && "Visitors who viewed specific products or categories but didn't add anything to their cart"}
                      {signal === "cartUsers" && "Visitors who added items to their cart but didn't complete the purchase"}
                    </Text>
                  </BlockStack>
                </InlineStack>
              ))}
            </BlockStack>

            <BlockStack gap="200">
              <Text variant="bodyMd">Keyword Themes</Text>
              <TextField
                label=""
                labelHidden
                value={keywordThemes}
                onChange={handleKeywordChange}
                placeholder="Add Keyword Themes – One per line (limit to 100)"
                multiline={3}
              />
              <Text variant="bodyMd" color="subdued">
                Separate each keyword by pressing Enter or typing on a new line
              </Text>
            </BlockStack>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Button url="/app/findWithAi" plain>Find with FeedOps AI</Button>
            </div>

            <Box
              background="bg-surface-info-subdued"
              borderRadius="200"
              padding="400"
            >
              <BlockStack gap="200">
                <Text variant="bodyMd" color="text-info">
                  Audience signals help the Microsoft PMax system quickly find high-intent users, improving targeting, conversions, and budget efficiency. They guide campaigns to focus on relevant audiences, like past customers or ready-to-buy shoppers, for better results.
                </Text>
              </BlockStack>
            </Box>
          </BlockStack>
        </Modal.Section>
      </Modal>
    </>
  );
}
