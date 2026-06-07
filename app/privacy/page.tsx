import Link from "next/link";

export const metadata = {
  title: "Kebijakan Privasi — Mein-Deutsch",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-teal-deep hover:underline">
        ← Kembali
      </Link>

      <h1 className="mb-2 text-3xl font-extrabold text-slate-900">Kebijakan Privasi</h1>
      <p className="mb-8 text-sm text-slate-400">Terakhir diperbarui: 7 Juni 2026</p>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-700">

        <section>
          <h2 className="text-base font-bold text-slate-900">1. Tentang Layanan Ini</h2>
          <p>
            <strong>Mein-Deutsch</strong> adalah website belajar bahasa Jerman level A1 yang dikelola secara non-komersial.
            Layanan ini tersedia gratis untuk membantu siapa pun belajar bahasa Jerman secara terstruktur.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">2. Data yang Kami Kumpulkan</h2>
          <p>Kami hanya mengumpulkan data yang diperlukan untuk menjalankan fitur layanan:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Alamat email</strong> — untuk membuat akun dan mengirim notifikasi penting (reset password, konfirmasi email).</li>
            <li><strong>Password</strong> — disimpan dalam bentuk terenkripsi (hash) oleh Supabase. Kami tidak pernah menyimpan atau melihat password aslimu.</li>
            <li><strong>Data progress belajar</strong> — topik yang sudah kamu pelajari dan selesaikan, beserta tanggal penyelesaian. Data ini digunakan untuk menampilkan statistik dan melanjutkan belajar dari topik terakhir.</li>
          </ul>
          <p className="mt-2">
            Kami <strong>tidak</strong> mengumpulkan: nama lengkap, nomor telepon, lokasi, data kartu kredit, atau data sensitif lainnya.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">3. Bagaimana Data Digunakan</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Menampilkan dashboard dan statistik progress belajarmu.</li>
            <li>Menyimpan topik yang sudah diselesaikan agar tidak hilang saat kamu kembali.</li>
            <li>Mengirim email konfirmasi dan reset password jika diminta.</li>
          </ul>
          <p className="mt-2">
            Data kamu <strong>tidak dijual</strong>, tidak dibagikan ke pihak ketiga untuk keperluan iklan, dan tidak digunakan untuk profiling komersial.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">4. Penyimpanan Data</h2>
          <p>
            Data disimpan di <strong>Supabase</strong> (infrastruktur berbasis PostgreSQL) yang menggunakan enkripsi saat penyimpanan dan pengiriman (TLS/HTTPS).
            Website di-hosting di <strong>Vercel</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">5. Hak Kamu</h2>
          <p>Kamu berhak untuk:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Mengakses</strong> data yang kami simpan — dapat dilihat di halaman Profil.</li>
            <li><strong>Mengubah password</strong> kapan saja melalui halaman Profil atau fitur "Lupa Password".</li>
            <li>
              <strong>Menghapus akun</strong> beserta semua data progress secara permanen melalui halaman{" "}
              <Link href="/profil" className="font-semibold text-teal-deep hover:underline">Profil</Link> → Hapus Akun.
              Penghapusan dilakukan segera dan tidak dapat dibatalkan.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">6. Cookie dan Sesi</h2>
          <p>
            Kami menggunakan <strong>cookie sesi</strong> yang diperlukan untuk menjaga status login kamu.
            Cookie ini tidak digunakan untuk melacak aktivitas di luar website ini dan tidak dibagikan ke pihak ketiga.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">7. Perubahan Kebijakan</h2>
          <p>
            Jika ada perubahan signifikan pada kebijakan ini, kami akan memperbarui tanggal di bagian atas halaman ini.
            Penggunaan layanan setelah perubahan berarti kamu menyetujui kebijakan yang diperbarui.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">8. Kontak</h2>
          <p>
            Jika kamu memiliki pertanyaan tentang kebijakan privasi ini atau ingin mengajukan permintaan terkait data,
            kamu bisa menghubungi kami melalui email:{" "}
            <a href="mailto:diakurnia20@gmail.com" className="font-semibold text-teal-deep hover:underline">
              diakurnia20@gmail.com
            </a>
          </p>
        </section>

      </div>

      <div className="mt-10 border-t border-teal-soft pt-6 text-center text-xs text-slate-400">
        <Link href="/" className="hover:underline">Mein-Deutsch</Link>
        {" · "}
        <Link href="/profil" className="hover:underline">Profil</Link>
      </div>
    </main>
  );
}
