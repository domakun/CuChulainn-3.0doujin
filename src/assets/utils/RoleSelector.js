import neru from '../images/role/role.png';
import atera from '../images/role/role-2.png';

function RoleSelector(name) {
    let role = {}
    switch(name){
        case 'neru':
            role = neru ;
            break;
        case 'atera':
            role = atera;
            break;
    }
    return role
}
export default RoleSelector;