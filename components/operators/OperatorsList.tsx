"use client";

import { useState, useMemo } from 'react';
import { Search, MapPin, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { OperatorCard } from './OperatorCard';
import { operators, countries } from '@/data/operators';
import { FilterState } from '@/types/operators';

export const OperatorsList = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    selectedCountry: '',
    ferryType: 'all',
    sortBy: 'rating',
    sortOrder: 'asc'
  });

  const [showFilters, setShowFilters] = useState(true);

  const filteredOperators = useMemo(() => {
    return operators
      .filter(operator => {
        const searchMatch = operator.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
        const countryMatch = !filters.selectedCountry ||
          operator.operatesIn.some(country => country.code === filters.selectedCountry);
        const ferryTypeMatch = filters.ferryType === 'all' ||
          (filters.ferryType === 'normal' ? operator.ferryCategory === 'normal' :
            operator.ferryCategory === 'high-speed' || operator.ferryCategory === 'both');

        return searchMatch && countryMatch && ferryTypeMatch;
      })
      .sort((a, b) => {
        const sortValue = filters.sortOrder === 'desc' ? -1 : 1;
        switch (filters.sortBy) {
          case 'rating':
            return (b.rating - a.rating) * sortValue;
          case 'name':
            return a.name.localeCompare(b.name) * sortValue;
          case 'customerCount':
            return (b.customerCount - a.customerCount) * sortValue;
          default:
            return 0;
        }
      });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      selectedCountry: '',
      ferryType: 'all',
      sortBy: 'rating',
      sortOrder: 'desc'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center text-transparent bg-gradient-to-r from-[#00F5FF] via-[#7A00FF] via-[#FF00A8] to-[#00FFC6] bg-clip-text">
        I did not copy paste the design exactly, I made some adjustments to enhance the user experience.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ferry operators</h1>
          <p className="text-gray-600">
            {filteredOperators.length === operators.length
              ? `Discover the ${operators.length} ferry operators we work with`
              : `Showing ${filteredOperators.length} of ${operators.length} operators`}
          </p>
        </div>
        <Button
          variant="default"
          className="mt-4 md:mt-0 bg-[#00b6d6] hover:bg-[#008ca3] text-white px-6"
        >
          Book your tickets
        </Button>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-[#00b6d6] border-[#00b6d6] hover:bg-[#e0f7fb]"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </Button>
        </div>

        <div className="relative">
          <select
            className="h-10 px-4 pr-8 border rounded-md text-gray-900 focus:ring-[#00b6d6] focus:border-[#00b6d6] appearance-none"
            value={`${filters.sortBy}-${filters.sortOrder}`}
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split('-');
              setFilters({
                ...filters,
                sortBy: sortBy as FilterState['sortBy'],
                sortOrder: sortOrder as FilterState['sortOrder']
              });
            }}
          >
            <option value="rating-asc">Sort by: Reviews (low first)</option>
            <option value="rating-desc">Sort by: Reviews (high first)</option>
            <option value="name-asc">Sort by: Name (A-Z)</option>
            <option value="name-desc">Sort by: Name (Z-A)</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search by operator name"
            value={filters.searchTerm}
            onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
            className="pl-10 min-w-[250px]"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex justify-center md:justify-end">
          <Button variant="outline" className="whitespace-nowrap">
            Live Map View
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {showFilters && (
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                {(filters.searchTerm || filters.selectedCountry || filters.ferryType !== 'all') && (
                  <Button
                    variant="link"
                    className="text-sm text-[#00b6d6] hover:text-[#008ca3] h-auto p-0"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Operating in
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-1 top-2.5 h-5 w-5 text-gray-400" />
                    <select
                      className="w-full border rounded-md py-2 pl-5 pr-10 text-gray-900 focus:ring-[#00b6d6] focus:border-[#00b6d6]"
                      value={filters.selectedCountry}
                      onChange={(e) => setFilters({ ...filters, selectedCountry: e.target.value })}
                    >
                      <option value="">All countries</option>
                      {countries.map(country => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ferry types
                  </label>
                  <div className="space-y-2">
                    {['all', 'normal', 'high-speed'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="ferryType"
                          value={type}
                          checked={filters.ferryType === type}
                          onChange={(e) => setFilters({ ...filters, ferryType: e.target.value as FilterState['ferryType'] })}
                          className="mr-2 text-[#00b6d6] focus:ring-[#00b6d6]"
                        />
                        <span className="text-gray-700">
                          {type === 'all' ? 'All ferries' :
                            type === 'normal' ? 'Normal ferries' :
                              'High-speed ferries'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={showFilters ? 'md:col-span-9' : 'md:col-span-12'}>
          {filteredOperators.length > 0 ? (
            <div className="space-y-4">
              {filteredOperators.map((operator) => (
                <OperatorCard key={operator.id} {...operator} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No operators found matching your criteria</p>
              <Button
                variant="link"
                className="text-[#00b6d6] hover:text-[#008ca3] mt-2"
                onClick={clearFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};