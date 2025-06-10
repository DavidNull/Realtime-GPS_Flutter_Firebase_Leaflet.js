// PRUEBA DE PENETRACIÓN - Acceso no autorizado a Firebase
import('https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js').then(({ initializeApp }) => {
    return import('https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js').then(({ getFirestore, collection, addDoc, getDocs, query, limit }) => {
      
      const firebaseConfig = {
        apiKey: "AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",
        authDomain: "ubicacion-faf91.firebaseapp.com",
        projectId: "ubicacion-faf91",
        storageBucket: "ubicacion-faf91.firebasestorage.app",
        messagingSenderId: "87507844915",
        appId: "1:87507844915:web:60039ca325721053cac846"
      };
  
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
  
      console.log('🚨 INICIANDO PRUEBA DE PENETRACIÓN...');
      
      // Prueba 1: Intentar escribir datos maliciosos
      addDoc(collection(db, 'security_test'), {
        message: '🚨 HACK SUCCESSFUL - Acceso no autorizado',
        timestamp: new Date(),
        hacker: 'Atacante externo',
        vulnerability: 'Reglas de Firestore inseguras',
        warning: 'Cualquiera puede escribir en tu base de datos'
      }).then((docRef) => {
        console.log('🚨 VULNERABILIDAD CRÍTICA: ¡Pude escribir datos maliciosos!');
        console.log('📋 ID del documento:', docRef.id);
        console.log('💀 Tu base de datos está COMPLETAMENTE EXPUESTA');
      }).catch((error) => {
        if (error.code === 'permission-denied') {
          console.log('✅ SEGURIDAD OK: Acceso denegado correctamente');
        } else {
          console.log('❌ Error:', error.message);
        }
      });
  
      // Prueba 2: Intentar leer datos
      getDocs(query(collection(db, 'users'), limit(5))).then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('📄 No hay datos en la colección "users" o acceso denegado');
        } else {
          console.log('🚨 VULNERABILIDAD: ¡Pude leer datos de usuarios!');
          querySnapshot.forEach((doc) => {
            console.log('📋 Documento:', doc.id, doc.data());
          });
        }
      }).catch((error) => {
        if (error.code === 'permission-denied') {
          console.log('✅ SEGURIDAD OK: Lectura denegada correctamente');
        } else {
          console.log('❌ Error de lectura:', error.message);
        }
      });
    });
  });