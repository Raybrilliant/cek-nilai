<script lang="ts">
  import supabase from "$lib/db";

  let studentData: User = $state({
    id: 0,
    name: "",
    class: "",
    assignment: [],
  });
  let nis = $state("");
  let loading = $state(false);
  let status = $state(0);

  interface User {
    id: number;
    name: string;
    class: string;
    assignment: {
      assignment: string;
      score: number;
    }[];
  }

  const getData = async () => {
    loading = true;
    const res = await supabase
      .from("users")
      .select("*,assignment(*)")
      .eq("id", nis)
      .single();
    status = res.status;
    if (res.status == 200) {
      studentData = res.data;
      loading = false;
    }
  };

  const getAverage = () => {
    const sum = studentData.assignment.reduce((acc: any, item: any) => acc + item.score,0);
    const average = sum / studentData.assignment.length;
    return average;
  };

</script>

<section class="p-4 flex flex-col justify-center items-center h-screen w-full">
  <div class="card w-96 border transition ease-in-out duration-500">
    <div class="card-body relative">
      <!-- Search Page -->
      {#if status == 0}
        <div class="space-y-3">
          <h2 class="card-title">Ayo Cek Nilai Kamu</h2>
          <label class=" floating-label">
            <input
              type="text"
              maxlength="7"
              typeof="number"
              placeholder="Masukkan 7 Angka Terakhir NIS "
              class="input input-bordered w-full"
              bind:value={nis}
            />
            <span>NIS</span>
          </label>
          <button
            class="btn btn-neutral w-full"
            disabled={loading || nis.length < 7}
            onclick={getData}
          >
            {#if loading}
              <span class="loading loading-infinity loading-lg"></span>
            {:else}
              Cek Nilai
            {/if}
          </button>
          <p class="text-sm font-semibold italic text-gray-500">Pesan Perpisahan</p>
          <p class="text-sm text-justify space-y-3">
            Setahun ini kita telah lewati masa-masa yang seru. 
            Belajar, bercanda, bertumbuh bersama dalam ruang penuh cerita. 
            Terima kasih atas setiap momen yang membuat langkah ini begitu berarti.
            <br/>
            Kini, tibalah saatnya saya pamit undur diri. 
            Tugas baru memanggil saya melangkah ke tempat yang lain, 
            Namun kenangan tentang kalian akan tetap tinggal di hati, 
            sebagai jejak indah dalam perjalanan seorang guru.
            <br />
            Ilmu yang pernah kita bagi, semoga tetap hidup dan tumbuh dalam langkah kalian. 
            Jika kelak kalian menoleh ke belakang, 
            semoga ada sepotong pelajaran dan doa yang setia menyertai.
            <br />
            Tetaplah menjadi pembelajar sejati
            rendah hati, penuh semangat, dan tak takut bermimpi. 
            Sampai jumpa di lain waktu. 
            Doa terbaikku selalu untuk kalian semua.
            <br/>
          </p>
        </div>
      {:else if status == 200}
        <!-- Result Page -->
        <img src="raport.webp" class="scale-150" alt="bg" />
        <div
          class="text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <h2 class="font-semibold text-sm text-center">Raport Sementara</h2>
          <h2 class="font-semibold text-center text-xl mb-2">
            Teknik Informatika
          </h2>
          <hr />
          <div class="flex justify-between my-2">
            <h2 class="font-semibold">{studentData.name}</h2>
            <h2 class="font-semibold">{studentData.class}</h2>
          </div>
          <hr/>

          <!-- Table -->
          <div class="overflow-y-auto h-72">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th class=" text-center">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {#each studentData.assignment as item}
                  <tr>
                    <th>{item.assignment}</th>
                    <td class=" text-center">{item.score}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
          <hr />
          <div class="flex justify-between">
            <h2 class="font-semibold">Nilai Akhir</h2>
            <h2 class="font-semibold">{getAverage()}</h2>
          </div>
        </div>
      {:else}
        <div class="space-y-3">
          <h2 class="card-title">Data Tidak Ditemukan</h2>
          <p class="text-sm">Pastikan NIS yang kamu masukkan sudah benar</p>
        </div>
      {/if}
    </div>
  </div>
</section>
