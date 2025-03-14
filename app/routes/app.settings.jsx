import React, { useState } from 'react';
import {
  Page,
  Layout,
  Card,
  TextField,
  Select,
  Checkbox,
  Button,
  FormLayout,
  BlockStack,
  InlineStack,
  Banner,
} from '@shopify/polaris';

const SettingsPage = () => {
  const [storeName, setStoreName] = useState('My Shopify Store');
  const [currency, setCurrency] = useState('USD');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <Page title="Settings">
      <Layout>

        <Layout.Section>
          <Card title="General Settings" sectioned>
            <FormLayout>
              <TextField
                label="Store Name"
                value={storeName}
                onChange={setStoreName}
                autoComplete="off"
              />
              <Select
                label="Currency"
                options={['USD', 'EUR', 'GBP', 'INR']}
                value={currency}
                onChange={setCurrency}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card title="Notifications" sectioned>
            <Checkbox
              label="Enable Email Notifications"
              checked={emailNotifications}
              onChange={setEmailNotifications}
            />
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card title="Security" sectioned>
            <Banner title="Important" status="warning">
              Enabling two-factor authentication adds extra security to your account.
            </Banner>
            <Checkbox
              label="Enable Two-Factor Authentication"
              checked={twoFactorAuth}
              onChange={setTwoFactorAuth}
            />
          </Card>
        </Layout.Section>

        <Layout.Section>
          <BlockStack gap="4">
            <InlineStack align="end">
              <Button primary onClick={handleSave}>
                Save Settings
              </Button>
            </InlineStack>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default SettingsPage;
