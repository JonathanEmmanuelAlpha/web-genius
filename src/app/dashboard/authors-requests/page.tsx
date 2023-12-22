import AuthorCard from "../ui/AuthorCard";

export default function Authors() {
  return (
    <div className="max-w-[1024px] mx-auto my-0">
      <h2 className="text-center uppercase py-4 text-xl text-[--primary-color] font-medium">
        Demandes d'auteurs
      </h2>
      <div className="w-full my-2">
        <p className="max-w-[500px] shadow border bg-slate-50 text-slate-600 leading-7 p-4">
          Ci-dessous la listes de toutes les demandes d'auteurs n'ayant
          actuellement recues aucune réponses de la part des administrateurs.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 py-8">
        <AuthorCard
          avatar="/images/avatars/user1.jpg"
          joinAt="12/12/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user2.jpg"
          joinAt="14/05/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user3.jpg"
          joinAt="03/04/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user4.jpg"
          joinAt="14/05/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user5.jpg"
          joinAt="03/04/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user6.jpg"
          joinAt="12/12/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user8.jpg"
          joinAt="14/05/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user9.jpg"
          joinAt="03/04/2023"
          pseudo="Alexendra Jointus"
        />
        <AuthorCard
          avatar="/images/avatars/user10.jpg"
          joinAt="03/04/2023"
          pseudo="Alexendra Jointus"
        />
      </div>
    </div>
  );
}
