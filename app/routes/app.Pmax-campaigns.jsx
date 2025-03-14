import React, { useState } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  Button,
  DataTable,
  Filters,
  TextField,
  EmptySearchResult,
  LegacyTabs,
  Badge,
  Modal,
  FormLayout,
  Select,
  DatePicker,
  Box,
  BlockStack,
  InlineStack,
  Banner,
} from '@shopify/polaris';
// import { Search } from 'lucide-react';

const mockCampaigns = [
  {
    id: '1',
    name: 'Summer Collection PMax',
    status: 'Active',
    budget: 500,
    startDate: '2025-05-01',
    endDate: '2025-08-31',
    performance: {
      impressions: 15000,
      clicks: 450,
      conversions: 28,
      cost: 320.45,
    },
  },
  {
    id: '2',
    name: 'New Arrivals Promotion',
    status: 'Active',
    budget: 300,
    startDate: '2025-06-15',
    endDate: null,
    performance: {
      impressions: 8200,
      clicks: 310,
      conversions: 15,
      cost: 180.20,
    },
  },
  {
    id: '3',
    name: 'Holiday Special',
    status: 'Paused',
    budget: 1000,
    startDate: '2024-12-01',
    endDate: '2025-01-15',
    performance: {
      impressions: 25000,
      clicks: 980,
      conversions: 65,
      cost: 750.80,
    },
  },
];

const PMaxCampaignPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    budget: '',
    status: 'Active',
    startDate: new Date(),
    endDate: null,
  });

  const [{ month, year }, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [selectedStartDate, setSelectedStartDate] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [selectedEndDate, setSelectedEndDate] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [hasEndDate, setHasEndDate] = useState(false);

  const handleStartDateChange = (range) => {
    setSelectedStartDate(range);
    setNewCampaign({
      ...newCampaign,
      startDate: range.start,
    });
  };

  const handleEndDateChange = (range) => {
    setSelectedEndDate(range);
    setNewCampaign({
      ...newCampaign,
      endDate: range.start,
    });
  };

  const handleMonthChange = (month, year) => {
    setDate({ month, year });
  };

  const handleCreateCampaign = () => {
    const newCampaignData = {
      id: (campaigns.length + 1).toString(),
      name: newCampaign.name,
      status: newCampaign.status,
      budget: parseFloat(newCampaign.budget),
      startDate: newCampaign.startDate.toISOString().split('T')[0],
      endDate: newCampaign.endDate ? newCampaign.endDate.toISOString().split('T')[0] : null,
      performance: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        cost: 0,
      },
    };

    setCampaigns([...campaigns, newCampaignData]);
    setIsCreatingCampaign(false);

    setNewCampaign({
      name: '',
      budget: '',
      status: 'Active',
      startDate: new Date(),
      endDate: null,
    });
    setHasEndDate(false);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (searchValue && !campaign.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    if (selectedTab === 1 && campaign.status !== 'Active') return false;
    if (selectedTab === 2 && campaign.status !== 'Paused') return false;
    if (selectedTab === 3 && campaign.status !== 'Ended') return false;
    return true;
  });

  const tabs = [
    { id: 'all', content: 'All', panelID: 'all-campaigns' },
    { id: 'active', content: 'Active', panelID: 'active-campaigns' },
    { id: 'paused', content: 'Paused', panelID: 'paused-campaigns' },
    { id: 'ended', content: 'Ended', panelID: 'ended-campaigns' },
  ];

  const rows = filteredCampaigns.map(campaign => [
    <Text variant="bodyMd" fontWeight="bold">{campaign.name}</Text>,
    <Badge status={campaign.status === 'Active' ? 'success' : campaign.status === 'Paused' ? 'warning' : 'critical'}>
      {campaign.status}
    </Badge>,
    `$${campaign.budget.toFixed(2)}`,
    campaign.startDate,
    campaign.endDate || 'Ongoing',
    campaign.performance.impressions.toLocaleString(),
    campaign.performance.clicks.toLocaleString(),
    campaign.performance.conversions.toLocaleString(),
    `$${campaign.performance.cost.toFixed(2)}`,
    <Button size="slim">Edit</Button>,
  ]);

  return (
    <Page title="PMax Campaigns">
      <Card>
        <LegacyTabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />
        <TextField placeholder="Search campaigns" value={searchValue} onChange={setSearchValue}  />
        {filteredCampaigns.length === 0 ? (
          <EmptySearchResult title="No campaigns found" />
        ) : (
          <DataTable
            columnContentTypes={['text', 'text', 'numeric', 'text', 'text', 'numeric', 'numeric', 'numeric', 'numeric', 'text']}
            headings={[ 'Campaign Name', 'Status', 'Budget', 'Start Date', 'End Date', 'Impressions', 'Clicks', 'Conversions', 'Cost', 'Actions']}
            rows={rows}
          />
        )}
      </Card>
    </Page>
  );
};

export default PMaxCampaignPage;
