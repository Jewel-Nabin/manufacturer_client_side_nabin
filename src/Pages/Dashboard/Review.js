import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const Review = () => {
    const [ratingValue, setRatingValue] = React.useState(0);
    return (
        <div className='' style={{ display: 'block', padding: 30 }}>
            <h4>Please leave your valued feedback!</h4>
            <h3>Your valuable feedback helps us move forward</h3>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="Rating Label"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                />
            </Box>
        </div>
    );
};

export default Review;