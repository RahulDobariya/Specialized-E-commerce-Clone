// src/components/FilterSidebar.js
import React from 'react';
import { Box, List, ListItem, Link } from '@chakra-ui/react';

const FilterSidebar = ({ categories, onCategorySelect }) => {
    
  return (
    <Box width="200px" p={4}>
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <Link to="/productPage" onClick={() => onCategorySelect(category)}>
              {category}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FilterSidebar;
//  <List>
    //     {
    //         group.map((ele)=>(
    //             <ListItem key={ele}>{ele}</ListItem>
    //         ))
    //     }
    //   </List>