import {
  Modal,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Button,
  Select,
} from "@shopify/polaris";
import { useState } from "react";

export default function AudienceTargetingModal() {
  const [open, setOpen] = useState(false);
  const [targetScope, setTargetScope] = useState("local");
  const [country, setCountry] = useState("United States");
  const [region, setRegion] = useState("California");

  const handleScopeChange = (scope) => setTargetScope(scope);
  const handleCountryChange = (value) => setCountry(value);
  const handleRegionChange = (value) => setRegion(value);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Set Audience Targeting</Button>
      <Modal
        open={open}
        onClose={handleClose}
        title="Set Your Audience Targeting"
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
            <BlockStack gap="200">
              <Text variant="headingMd" as="h3">
                Target Scope
              </Text>

              <InlineStack gap="300">
                <Box
                  background={
                    targetScope === "national" ? "bg-surface-secondary" : "bg-surface"
                  }
                  borderWidth="1"
                  borderRadius="200"
                  borderColor="border"
                  width="100%"
                  padding="400"
                  onClick={() => handleScopeChange("national")}
                  style={{ cursor: "pointer" }}
                >
                  <BlockStack gap="200" alignment="center">
                    <Text variant="bodyMd" as="p" alignment="center">
                      National
                    </Text>
                  </BlockStack>
                </Box>

                <Box
                  background={
                    targetScope === "local" ? "bg-success-subdued" : "bg-surface"
                  }
                  borderWidth="1"
                  borderRadius="200"
                  borderColor={targetScope === "local" ? "border-success" : "border"}
                  width="100%"
                  padding="400"
                  onClick={() => handleScopeChange("local")}
                  style={{ cursor: "pointer" }}
                >
                  <BlockStack gap="200" alignment="center">
                    <Text variant="bodyMd" as="p" alignment="center">
                      Local
                    </Text>
                  </BlockStack>
                </Box>
              </InlineStack>
            </BlockStack>

            <BlockStack gap="200">
              <Text variant="bodyMd" as="p">Select Country</Text>
              <Select
                label=""
                labelHidden
                options={[{ label: "United States", value: "United States" }]}
                value={country}
                onChange={handleCountryChange}
              />
            </BlockStack>

            <BlockStack gap="200">
              <Text variant="bodyMd" as="p">Select City/Region</Text>
              <Select
                label=""
                labelHidden
                options={[{ label: "California", value: "California" }]}
                value={region}
                onChange={handleRegionChange}
              />
            </BlockStack>
          </BlockStack>
        </Modal.Section>
      </Modal>
    </>
  );
}
