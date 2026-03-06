"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  documentos: string[];
}

export default function DocumentacaoModal({
  open,
  onClose,
  documentos,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 relative animate-fadeIn">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-[#2c3e50] mb-4">
          📋 Documentação Necessária
        </h3>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-sm text-blue-700 mb-4">
          <strong>Importante:</strong> A documentação deve ser enviada em PDF
          legível para abertura do processo.
        </div>

        <ul className="space-y-2 max-h-100 overflow-y-auto pr-2">
          {documentos.map((doc, index) => (
            <li
              key={index}
              className="bg-gray-50 p-3 rounded-md border-l-4 border-[#3498db] text-sm shadow-sm"
            >
              📄 {doc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
