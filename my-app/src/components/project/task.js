import React from 'react'

export default function Task(){
    
    return (<div class="col-xxl-5 d-flex">
    <div class="card border-0 flex-fill w-100">
        <div class="card-header border-0 card-header-space-between">
            <h2 class="card-header-title h4 text-uppercase">
                Projects
            </h2>
        </div>
        <div class="table-responsive">
            <table id="projectsTable" class="table align-middle table-edge table-nowrap mb-0">
                <thead class="thead-light">
                    <tr>
                        <th class="w-60px">#</th>
                        <th>Tasks</th>
                        <th>Project manager</th>
                        <th>Status</th>
                        <th>IMPT</th>
                        <th>Time Frame</th>
                        <th class="text-end">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <span class="avatar avatar-xs me-2">

                            </span>
                            Task 1
                        </td>
                        <td class="text-muted">Jon Richardson</td>
                        <td class="text-muted">Done</td>
                        <td class="text-muted">Urgent</td>
                        <td class="text-muted">00:00:00</td>
                        <td class="text-end"><span class="badge text-bg-success rounded-pill">Completed</span></td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <span class="avatar avatar-xs me-2">
                           
</span>
                            Task 2
                        </td>
                        <td class="text-muted">Alba Monday</td>
                        <td class="text-muted">Not Done</td>
                        <td class="text-muted">Fluid</td>
                        <td class="text-muted">2 days 5hrs rem</td>
                        <td class="text-end"><span class="badge text-bg-success rounded-pill">Completed</span></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <span class="avatar avatar-xs me-2">
                              </span>
                            Task 3
                        </td>
                        <td class="text-muted">Rose Watson</td>
                        <td class="text-muted">80%</td>
                        <td class="text-muted">Urgent</td>
                        <td class="text-muted">00:55:27</td>
                        <td class="text-end"><span class="badge text-bg-warning rounded-pill">In-progress</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
</div>
</div>
    )
}