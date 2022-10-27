const { Comments } = require('../models');

const commentdata = [
  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '16',
    
  },

  {
    comment: 'Nice Product',
    user_id: '',
    product_id: '36',
    
  },

  {
    comment: 'still available?',
    user_id: '',
    product_id: '35',
    
  },
  
  {
    comment: 'Dont buy this',
    user_id: '',
    product_id: '34',
    
  },
  
  {
    comment: 'Waste of money',
    user_id: '',
    product_id: '33',
    
  },
  
  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '32',
    
  },
  
  {
    comment: 'Great product',
    user_id: '',
    product_id: '31',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '30',
  },


  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '29',
    
  },
  {
    comment: 'I have the same one',
    user_id: '',
    product_id: '28',
    
  },
  {
    comment: 'Wow',
    user_id: '',
    product_id: '27',
    
  },
  {
    comment: 'Incredible!',
    user_id: '',
    product_id: '26',
    
  },
  {
    comment: 'Comfortable',
    user_id: '',
    product_id: '25',
    
  },
  {
    comment: 'Hello neighbors!',
    user_id: '',
    product_id: '24',
    
  },
  {
    comment: 'This seller is a scam',
    user_id: '',
    product_id: '23',
    
  },
  {
    comment: 'This is nice',
    user_id: '',
    product_id: '22',
    
  },
  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '21',
    
  },

  {
    comment: 'Nice Product',
    user_id: '',
    product_id: '20',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '10',
    
  },
  
  {
    comment: 'Dont buy this',
    user_id: '',
    product_id: '10',
    
  },
  
  {
    comment: 'Waste of money',
    user_id: '',
    product_id: '11',
    
  },
  
  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '9',
    
  },
  
  {
    comment: 'Great product',
    user_id: '',
    product_id: '8',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '7',
  },


  {
    comment: 'Is this still available?',
    user_id: '',
    product_id: '6',
    
  },
  {
    comment: 'I have the same one',
    user_id: '',
    product_id: '5',
    
  },
  {
    comment: 'Wow',
    user_id: '',
    product_id: '4',
    
  },
  {
    comment: 'Incredible!',
    user_id: '',
    product_id: '2',
    
  },
  {
    comment: 'Comfortable',
    user_id: '',
    product_id: '3',
    
  },
  {
    comment: 'Hello neighbors!',
    user_id: '',
    product_id: '1',
    
  },
  {
    comment: 'This seller is a scam',
    user_id: '',
    product_id: '6',
    
  },
  {
    comment: 'This is nice',
    user_id: '',
    product_id: '37',
    
  },



];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;