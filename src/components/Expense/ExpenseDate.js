import './ExpenseDate.css';
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const Day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const Year=props.date.getFullYear();
    return(
        <div>
            <div>{month}</div>
            <div>{Day}</div>
            <div>{Year}
            </div>
        </div>
    )
}
export default ExpenseDate;