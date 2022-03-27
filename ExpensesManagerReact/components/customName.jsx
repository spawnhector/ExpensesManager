const Name = ({name}) => {
    let splitName = name.split('');
    let fixed = '';
    splitName.map((item,index)=>{
        index < 6 ? fixed = fixed+item : index < 9 ? fixed = fixed+'.' : '';  
    });
    return <>{fixed}</>;
}
export default Name;