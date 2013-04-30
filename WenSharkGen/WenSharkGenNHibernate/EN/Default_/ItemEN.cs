
using System;

namespace WenSharkGenNHibernate.EN.Default_
{
public partial class ItemEN
{
/**
 *
 */

private int id;

/**
 *
 */

private string name;

/**
 *
 */

private Nullable<DateTime> created;

/**
 *
 */

private string type;

/**
 *
 */

private System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.GenreEN> genre;

/**
 *
 */

private System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.UserEN> user;





public virtual int Id {
        get { return id; } set { id = value;  }
}


public virtual string Name {
        get { return name; } set { name = value;  }
}


public virtual Nullable<DateTime> Created {
        get { return created; } set { created = value;  }
}


public virtual string Type {
        get { return type; } set { type = value;  }
}


public virtual System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.GenreEN> Genre {
        get { return genre; } set { genre = value;  }
}


public virtual System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.UserEN> User {
        get { return user; } set { user = value;  }
}





public ItemEN()
{
        genre = new System.Collections.Generic.List<WenSharkGenNHibernate.EN.Default_.GenreEN>();
        user = new System.Collections.Generic.List<WenSharkGenNHibernate.EN.Default_.UserEN>();
}



public ItemEN(int id, string name, Nullable<DateTime> created, string type, System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.GenreEN> genre, System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.UserEN> user)
{
        this.init (id, name, created, type, genre, user);
}


public ItemEN(ItemEN item)
{
        this.init (item.Id, item.Name, item.Created, item.Type, item.Genre, item.User);
}

private void init (int id, string name, Nullable<DateTime> created, string type, System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.GenreEN> genre, System.Collections.Generic.IList<WenSharkGenNHibernate.EN.Default_.UserEN> user)
{
        this.Id = id;


        this.Name = name;

        this.Created = created;

        this.Type = type;

        this.Genre = genre;

        this.User = user;
}

public override bool Equals (object obj)
{
        if (obj == null)
                return false;
        ItemEN t = obj as ItemEN;
        if (t == null)
                return false;
        if (Id.Equals (t.Id))
                return true;
        else
                return false;
}

public override int GetHashCode ()
{
        int hash = 13;

        hash += this.Id.GetHashCode ();
        return hash;
}
}
}
