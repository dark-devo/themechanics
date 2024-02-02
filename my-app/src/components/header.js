import React from 'react'


export default function Header (props) {
    return (
        <header>
            <h1>Team Member Allocation</h1>
            <h5>{props.selectedTeam} has 3 members</h5>
            <form>
                <select 
                        id='Team'
                        name='Team'
                        value={props.selectedTeam}
                        onChange={props.handleTeamSelection}>
                    <option value='TeamA'>Team A</option>
                    <option value='TeamB'>Team B</option>
                    <option value='TeamC'>Team C</option>
                    <option value='TeamD'>Team D</option>
                </select>
            </form>
            <hr/>
        </header>
    )
}