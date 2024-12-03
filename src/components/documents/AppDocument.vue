<template>
    <div class="container">

    <div class="card">
        <div class="card-header">
            <div class="row">

            <div class="col-6 text-center">
                <h3>Documents</h3>
            </div>
    <!-- Search Bar -->
     <div class="col-6">
        <div class="mb">
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        placeholder="Search..."
      />
    </div>
     </div>
    </div>


        </div>

            <div class="class-body">
                <table class="table table-bordered table-striped">
                    <thead>
                         <tr>
                            <th>title</th>
                            <th>heading</th>
                            <th>content</th>
                            <th>action</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">

            </div>
    </div>
</div>

</template>

<script>
export default{
    name: "AppDocument"
}
</script>
