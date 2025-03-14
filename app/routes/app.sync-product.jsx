import {LegacyCard, EmptyState} from '@shopify/polaris';
import React from 'react';
import { json } from "@remix-run/node";

function EmptyStateExample() {
  return (
    <LegacyCard sectioned>
      <EmptyState
        heading="Manage your inventory transfers"
        action={{content: 'Add transfer',  url: '/app',}}
        fullWidth={false}
        secondaryAction={{
          content: 'Learn more',
          url: 'https://help.shopify.com',
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Track and receive your incoming inventory from suppliers.</p>
      </EmptyState>
    </LegacyCard>
  );
}

export default EmptyStateExample
