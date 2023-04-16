import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {Home, Settings} from '@mui/icons-material';



const getIcon = (Icon) => {
    switch(Icon){
        case 'HOME':
            return(<Home/>)
        case 'TASKS':
            return(<Home/>)
        case 'SETTINGS':
            return(<Settings/>)
        default:
            return (<Home/>)
    }


}


const MenuListItems = ( {list} ) =>{
  const navigate = useNavigate();  


return(
            <List>
                    {list.map(({text, path, icon}, index) => 
                        (
                            <ListItem key={index} button onClick={() => navigate(path)}>
                                <ListItemIcon>
                                    {getIcon(icon)}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={text}
                                />
                            </ListItem>
                        )
                    )}
            </List>
);

}

export default MenuListItems;

