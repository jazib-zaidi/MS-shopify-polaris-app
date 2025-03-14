import React, { useState } from "react";
import {
  Page,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Button,
  TextField,
  ProgressBar,
  Tag,
  Link
} from "@shopify/polaris";
import { ComposeIcon } from '@shopify/polaris-icons';
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export default function CampaignSettings() {
  const [campaignName, setCampaignName] = useState('Sales Focused - Pmax Campaign');
  const [targetRoas, setTargetRoas] = useState('Maximize Conversion Value');
  const [budget, setBudget] = useState('');
  const [targetScope, setTargetScope] = useState('National');
  const [locations, setLocations] = useState(['United States', 'Canada', 'United Kingdom']);
  const shopify = useAppBridge();
  const handleRemoveLocation = (locationToRemove) => {
    setLocations(locations.filter(location => location !== locationToRemove));
  };

  return (
    <Card>
      {/* Progress Bar Section */}
      <BlockStack gap="500">
      <Button onClick={() => shopify.modal.show('my-modal')}>Open Modal</Button>
      <Modal id="my-modal">
        <p>Messagdcbdh Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque, placeat ad fuga, consequuntur perspiciatis illo rerum tempora ullam saepe qui unde officiis, autem voluptatum explicabo. Eligendi aut eveniet accusamus! Possimus ad obcaecati odio, ipsam iste architecto accusantium nemo labore earum. Laborum animi mollitia accusantium error voluptate illo dolore, ipsa maxime, repellendus enim tempore odit libero impedit facilis. Totam voluptatum quia molestiae sed autem ipsum quaerat. Corrupti beatae minus consequuntur dolore natus! Maxime placeat soluta similique ipsum quas, enim architecto nemo, optio quod recusandae suscipit veritatis eius. Dolores itaque culpa est sequi minus aut odit illum consequuntur doloribus, ipsum reprehenderit.e</p>
        <TitleBar title="Title">
          <button variant="primary">Label</button>
          <button onClick={() => shopify.modal.hide('my-modal')}>Label</button>
        </TitleBar>
      </Modal>
        <InlineStack gap="400" align="space-between">
          <InlineStack gap="400" align="center">
            <Box
              as="div"
              padding="300"
              borderRadius="full"
              background="bg-interactive"
              color="text-on-color"
              minWidth="32px"
              minHeight="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold">1</Text>
            </Box>
            <Text variant="bodyLg" fontWeight="semibold">
              Setup Conversion Tracking
            </Text>
          </InlineStack>
          <InlineStack gap="400" align="center">
            <Box
              as="div"
              padding="300"
              borderRadius="full"
              background="bg-subdued"
              color="text-subdued"
              minWidth="32px"
              minHeight="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold">2</Text>
            </Box>
            <Text variant="bodyLg" tone="subdued">
              Create Campaign
            </Text>
          </InlineStack>
        </InlineStack>

        {/* Progress Bar */}
        <Box paddingInline="0">
          <InlineStack gap="100">
            <Box
              background="bg-interactive"
              borderRadius="100"
              height="8px"
              width="50%"
            />
            <Box
              background="bg-subdued"
              borderRadius="100"
              height="8px"
              width="50%"
            />
          </InlineStack>
        </Box>

        {/* Campaign Settings Title and Description */}
        <BlockStack gap="300">
          <Text variant="headingLg" as="h1" fontWeight="bold">
            Campaign Settings
          </Text>
          <Text variant="bodyMd" as="p">
            Build a streamlined PMax structure optimized to drive traffic through Shopping Ads, Dynamic Search Ads, and Dynamic Remarketing.
          </Text>
        </BlockStack>

        {/* Form Fields Section */}
        <BlockStack gap="400">
          <InlineStack gap="400" align="start">
            {/* Left Column */}
            <Box width="50%">
              <BlockStack gap="400">
                {/* Campaign Name */}
                <Card>
                  <Box padding="400">
                    <BlockStack gap="200">
                      <Text variant="bodyMd" fontWeight="semibold">Campaign Name</Text>
                      <InlineStack align="space-between">
                        <Box width="100%">
                          <TextField
                            value={campaignName}
                            onChange={setCampaignName}
                            autoComplete="off"
                          />
                        </Box>
                        <Button icon={ComposeIcon} plain />
                      </InlineStack>
                    </BlockStack>
                  </Box>
                </Card>

                {/* Audience Signals */}
                <Card>
                  <Box padding="400">
                    <BlockStack gap="200">
                      <InlineStack align="start">
                        <Text variant="bodyMd" fontWeight="semibold">Audience Signals</Text>
                        <Text variant="bodyMd" tone="critical">*</Text>
                      </InlineStack>
                      <Text variant="bodySm" tone="subdued">3 of 4 Signals Set</Text>
                      <Box paddingBlockEnd="300">
                        <ProgressBar progress={75} color="success" size="small" />
                      </Box>
                      <Box>
                        <Button icon={ComposeIcon} plain />
                      </Box>
                    </BlockStack>
                  </Box>
                </Card>
              </BlockStack>
            </Box>

            {/* Right Column */}
            <Box width="50%">
              <BlockStack gap="400">
                {/* Target ROAS */}
                <Card>
                  <Box padding="400">
                    <BlockStack gap="200">
                      <InlineStack align="start">
                        <Text variant="bodyMd" fontWeight="semibold">Target ROAS</Text>
                        <Text variant="bodyMd" tone="critical">*</Text>
                      </InlineStack>
                      <InlineStack align="space-between">
                        <Box width="100%">
                          <TextField
                            value={targetRoas}
                            onChange={setTargetRoas}
                            autoComplete="off"
                          />
                        </Box>
                        <Button icon={ComposeIcon} plain />
                      </InlineStack>
                    </BlockStack>
                  </Box>
                </Card>

                {/* Daily Budget */}
                <Card>
                  <Box padding="400">
                    <BlockStack gap="200">
                      <InlineStack align="start">
                        <Text variant="bodyMd" fontWeight="semibold">Daily Budget</Text>
                        <Text variant="bodyMd" tone="critical">*</Text>
                      </InlineStack>
                      <InlineStack align="space-between">
                        <Box width="100%">
                          <TextField
                            value={budget}
                            onChange={setBudget}
                            placeholder="Please set a budget"
                            autoComplete="off"
                          />
                        </Box>
                        <Button icon={ComposeIcon} plain />
                      </InlineStack>
                    </BlockStack>
                  </Box>
                </Card>
              </BlockStack>
            </Box>
          </InlineStack>

          {/* GEO Targeting Section */}
          <Box paddingBlockStart="400">
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2" fontWeight="semibold">
                Set GEO Targeting
              </Text>

              <Card>
                <Box padding="400">
                  <BlockStack gap="400">
                    {/* Target Scope */}
                    <BlockStack gap="200">
                      <Text variant="bodyMd" fontWeight="semibold">Target Scope</Text>
                      <InlineStack align="space-between">
                        <Box width="100%">
                          <TextField
                            value={targetScope}
                            onChange={setTargetScope}
                            autoComplete="off"
                          />
                        </Box>
                        <Button icon={ComposeIcon} plain />
                      </InlineStack>
                    </BlockStack>

                    {/* Location */}
                    <BlockStack gap="200">
                      <Text variant="bodyMd" fontWeight="semibold">Location</Text>
                      <InlineStack gap="200" wrap>
                        {locations.map((location) => (
                          <Tag key={location} onRemove={() => handleRemoveLocation(location)}>
                            {location}
                          </Tag>
                        ))}
                      </InlineStack>
                    </BlockStack>
                  </BlockStack>
                </Box>
              </Card>
            </BlockStack>
          </Box>

          {/* Footer Actions */}
          <Box paddingBlock="600">
            <InlineStack align="space-between">
              <Link url="#">Skip this step and create your own PMax campaign.</Link>
              <Button variant="primary">Save & Preview</Button>
            </InlineStack>
          </Box>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}
