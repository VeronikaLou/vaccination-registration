import {
    AppBar, Tab, Tabs,
} from '@material-ui/core';
import React, { useState } from 'react';

export const Header = () => {
    const [value, setValue] = useState(0);

    return (
        <AppBar
            position="static"
            color="primary"
        >
            <Tabs
                aria-label="tabs"
                indicatorColor="secondary"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <Tab
                    label="Registrace"
                    value="registration"
                />
                <Tab
                    label="Očkovací centra"
                    value="vaccination_center"
                />
            </Tabs>
        </AppBar>
    );
};