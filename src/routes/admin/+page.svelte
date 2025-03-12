<script>
  let checkbox = $state(false);
  let select = $state();
  let loading = $state(false);
  let { data, form } = $props();

  if (form?.message) {
    loading = false
  }

</script>

<section class="p-4 flex flex-col justify-center items-center h-screen w-full">
  <div class=" card border">
    <div class=" card-body">
      <div class=" flex justify-end mb-4">
        <input type="checkbox" bind:checked={checkbox} class="toggle" />
      </div>
      <!-- Alert -->
      {#if form?.message}
        
        <div role="alert" class="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{form.message}</span>
        </div>
      {/if}
      <!-- Form Upload Score -->
      {#if !checkbox}
        <h2 class="card-title">Upload Nilai Siswa</h2>
        <form
          action="?/insertScore"
          method="post"
          enctype="multipart/form-data"
          onsubmit={() => (loading = true)}
        >
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Pick a file</legend>
            <input
              type="file"
              class="file-input"
              name="file-input"
              id="file-input"
              required
              accept="xlsx"
            />
            <label class="fieldset-label" for="file-input">Max size 2MB</label>
          </fieldset>
          <button class="btn btn-neutral" type="submit" disabled={loading}>
            {#if loading}
              <span class="loading loading-infinity loading-lg"></span>
            {:else}
              Upload
            {/if}
          </button>
        </form>
      {:else}
        <!-- Form Upload Siswa -->
        <h2 class="card-title">Upload Siswa</h2>
        <form
          action="?/insertStudent"
          method="post"
          onsubmit={() => (loading = true)}
          enctype="multipart/form-data"
        >
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Pick a file</legend>
            <input
              type="file"
              class="file-input"
              name="file-input"
              id="file-input"
              required
              accept="xlsx"
            />
            <label class="fieldset-label" for="file-input">Max size 2MB</label>
          </fieldset>
          <button class="btn btn-neutral" type="submit" disabled={loading}>
            {#if loading}
              <span class="loading loading-infinity loading-lg"></span>
            {:else}
              Upload
            {/if}
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>
